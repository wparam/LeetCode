// Given two binary trees and imagine that when you put one of them to cover the other, 
//some nodes of the two trees are overlapped while the others are not.

// You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, 
//then sum node vals up as the new val of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

// Example 1:
// Input: 
// 	Tree 1                     Tree 2                  
//           1                         2                             
//          / \                       / \                            
//         3   2                     1   3                        
//        /                           \   \                      
//       5                             4   7                  
// Output: 
// Merged tree:
// 	     3
// 	    / \
// 	   4   5
// 	  / \   \ 
// 	 5   4   7
// Note: The merging process must start from the root nodes of both trees.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
'use strict';
const util = require('util');
const tre = require('../lib/tree.js');
var mergeTrees = function(t1, t2) {
    if(!t1)
        return t2;
    if(!t2)
        return t1;
    t1.val = (t1.val||0)  + (t2.val||0);
    if(t1.left || t2.left){
        t1.left = mergeTrees(t1.left, t2.left);
    }
    if(t1.right || t2.right){
        t1.right = mergeTrees(t1.right, t2.right);
    }
    return t1;
};

console.log(tre.deserializeTree(mergeTrees(tre.serializeTree([1,3,2,5,null, null, null]),
    tre.serializeTree([2,1,3, null, 4, null, 7]))));