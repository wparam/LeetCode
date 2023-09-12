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
    let sum = [];
    let count = [];
    var foo = function(node, dept){
        if(!node || node.val === null)
            return;
        if(sum[dept]=== undefined || count[dept]===undefined){
            sum[dept] = 0;
            count[dept] = 0;
        }
        sum[dept] += node.val;
        count[dept] += 1;
        dept++;
        if(node.left)
            foo(node.left, dept);
        if(node.right)
            foo(node.right, dept);
    }
    foo(root, 0);
    for(let i = 0, j = sum.length; i<j; i++){
        sum[i] = sum[i]/count[i];
    }
    return sum;
};

// console.log(tre.deserializeTree(averageOfLevels(tre.serializeTree([2,3,null,1,3,1,2,7,null]))));
console.log(averageOfLevels(tre.serializeTree([2,3,null,1,3,1,2,7,null])));