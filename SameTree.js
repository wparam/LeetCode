//  Given two binary trees, write a function to check if they are equal or not.

// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

// Subscribe to see which companies asked this question

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
'use strict';
const util = require('util');
var tre = require('./lib/tree.js');
var isSameTree = function(p, q) {
    var serialize = function(node){
        var result = [];
        if(!node)
            return [null];
        result.push(node.val);
        if(!node.left && !node.right)
            return [node.val];
        result = [].concat(result, serialize(node.left));
        result = [].concat(result, serialize(node.right));
        return result;
    };
    
    var parry = serialize(p),
        plength = parry.length,
        result = true,
        qarry = serialize(q);
    if(parry.length!==qarry.length)
        return false;
    for(var i = 0; i<plength; i++){
        if(parry[i]!==qarry[i]){
            result = false;
            return false;
        }
    }
    return result;
};

console.log(isSameTree(tre.serializeTree([2,3,null,1,3,1,2,7,null]),
    tre.serializeTree([2,4,null,1,3,1,2,7,null])));
    
console.log(isSameTree(tre.serializeTree([2,3,null,1,3,1,2,7,null]),
    tre.serializeTree([2,3,null,1,1,3,2,7,null])));
console.log(isSameTree(tre.serializeTree([2,3,null,1,3,1,2,7,null]),
    tre.serializeTree([2,4,null,1,3,1,2,7,0])));
console.log(isSameTree(tre.serializeTree([2,3,null,1,3,1,2,7,null]),
    tre.serializeTree([2,3,null,1,3,1,2,7,null])));
console.log(isSameTree(tre.serializeTree([]),
    tre.serializeTree([0])));
console.log(tre.serializeTree([]));