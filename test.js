const util = require('util');
var tre = require('./lib/tree.js');

var invertTree = function(root) {
    if(!root)
        return root;
    if(!root.left && !root.right)
        return root;
    var temp;
    temp = root.left;
    root.left = root.right;
    root.right = temp;
    if(root.left){
        invertTree(root.left);
    }
    if(root.right){
        invertTree(root.right);
    }
    return root;
};

var middletravs = function(node){
    var result = [];
    if(!node || !node.val)
        return [null];
    result.push(node.val);
    if(!node.left && !node.right)
        return [node.val];
    result = [].concat(result, middletravs(node.left));
    result = [].concat(result, middletravs(node.right));
    return result;
};

var tree = tre.serializeTree([2,3,null,1,3,1,2,7,null]);
console.log(middletravs(tree));
// var result = invertTree(tree);
// console.log(tre.deserializeTree(result));
//console.log(JSON.stringify(tre.serializeTree([1,2,3,4,6,7,8])));
