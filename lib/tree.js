'use strict';

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

class Tree{
    constructor(){}
    
    findLeaf(tree){
        var result = [];
        if(!tree)
            return [];
        if(!tree.left && !tree.right){//hit leaf
            return [tree];
        }
        result = [].concat(this.findLeaf(tree.left));
        result = result.concat(this.findLeaf(tree.right));
        return result;
    }
    
    serializeTree(arr){
        if(!arr || arr.length ===0)
            return null;
        var root = new TreeNode(arr[0]),
            count = 1;
        while(count <= arr.length-1){
            let lvs = this.findLeaf(root);
            for(let j=0; j<lvs.length; j++){
                lvs[j].left = !arr[count] ? null : new TreeNode(arr[count]);
                count++;
                if(count <= arr.length-1){
                    lvs[j].right = !arr[count] ? null : new TreeNode(arr[count]);
                    count++;
                }
            }
        } 
        return root;
    }
    
    deserializeTree(tree){
        if(!tree)
            return [null];
        if(!tree.left && !tree.right)
            return [tree.val];
        var result = [tree];
        var level = getSameLevelLeavs([tree]);
        result = [].concat(result, level.leaves);
        while(level.hasChild){
            level = getSameLevelLeavs(level.leaves);
            result = [].concat(result, level.leaves);
        }
        let lastnotnull;
        let numresult = [];
        for(let t=result.length-1; t>0; t--)
            if(!!result[t]){
                lastnotnull = t;
                break;
            }
        
        for(let k = 0; k<=lastnotnull; k++){
            numresult.push(!result[k] ? null : result[k].val);
        }
        return numresult;
        
        function getSameLevelLeavs(arr){
            var leavs = [],
                hasChild = false;
            if(!arr || arr.length===0)
                return leavs;
            for(let i = 0; i<arr.length; i++){
                if(arr[i]){
                    leavs.push(arr[i].left);
                    leavs.push(arr[i].right);
                    hasChild |= (!!arr[i].left || !!arr[i].right);
                }
            }
            return {leaves: leavs, hasChild: hasChild};
        }
    }
    
    transform(arr){
        var transferArr = [],
            taLength = Math.log2(arr.length) | 0;
        for(var i = 0; i<= taLength; i++){
            transferArr[i] = [];
            for(var j = Math.pow(2,i)-1; j < Math.pow(2,i+1)-1 && j<arr.length; j++){
                transferArr[i].push(arr[j]);
            }
        }
        return transferArr;
    }
}
var treeUtil = module.exports = new Tree();

