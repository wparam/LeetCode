// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
// Note:
// The range of node's value is in the range of 32-bit signed integer.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

'use strict';
const util = require('util');
var tre = require('../lib/tree.js');
var averageOfLevels = function(root) {
    if(!root)
        return 0;
    let result = [];
    let leftval = root.left && root.left.val ? root.left && root.left.val : 0;
    let rightval = root.right && root.right.val ? root.right && root.right.val : 0;
    if(leftval!==0 || rightval !== 0)
        result.push((leftval + rightval)/2);
    result = [].concat(result, averageOfLevels(root.left), averageOfLevels(root.right));
    console.log(result);
    return result;
};

console.log(tre.deserializeTree(averageOfLevels(tre.serializeTree([2,3,null,1,3,1,2,7,null]))));