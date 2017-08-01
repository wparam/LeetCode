// Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to 
//the original key plus sum of all keys greater than the original key in BST.

// Example:

// Input: The root of a Binary Search Tree like this:
//               5
//             /   \
//            2     13

// Output: The root of a Greater Tree like this:
//              18
//             /   \
//           20     13


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

'use strict';
const util = require('util');
var tre = require('../../lib/tree.js');
var convertBST = function(root) {
    if(!root)
        return 0;
    if(root.right){
        root.val += root.right.val;    
    }
    if(root.left){
        root.left.val += root.val;
    }
    convertBST(root.left);        
    convertBST(root.right);
};

var node = tre.serializeTree([5, 2, 13, 1,3,6]);
convertBST(node);
console.log(tre.deserializeTree(node));