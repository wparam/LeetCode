// Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

// Example:

// Input:

//    1
//     \
//      3
//     /
//    2

// Output:
// 1

// Explanation:
// The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
// Note: There are at least two nodes in this BST.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
'use strict';
const util = require('util');
const tre = require('../../lib/tree.js');
var getMinimumDifference = function(root) {
//     The most common idea is to first inOrder traverse the tree and compare the delta between each of the adjacent values. 
//It's guaranteed to have the correct answer because it is a BST thus inOrder traversal values are sorted.

// Solution 1 - In-Order traverse, time complexity O(N), space complexity O(1).

// public class Solution {
//     int min = Integer.MAX_VALUE;
//     Integer prev = null;
    
//     public int getMinimumDifference(TreeNode root) {
//         if (root == null) return min;
        
//         getMinimumDifference(root.left);
        
//         if (prev != null) {
//             min = Math.min(min, root.val - prev);
//         }
//         prev = root.val;
        
//         getMinimumDifference(root.right);
        
//         return min;
//     }
    
// }
};
console.log(getMinimumDifference(tre.serializeTree([1,null,3,2])));