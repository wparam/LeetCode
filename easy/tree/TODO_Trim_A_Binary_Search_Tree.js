// Given a binary search tree and the lowest and highest boundaries as L and R, trim the tree so that all its elements lies in [L, R] (R >= L). 
// You might need to change the root of the tree, so the result should return the new root of the trimmed binary search tree.

// Example 1:
// Input: 
//     1
//    / \
//   0   2

//   L = 1
//   R = 2

// Output: 
//     1
//       \
//        2
// Example 2:
// Input: 
//     3
//    / \
//   0   4
//    \
//     2
//    /
//   1

//   L = 1
//   R = 3

// Output: 
//       3
//      / 
//    2   
//   /
//  1


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const util = require('util');
var tre = require('../../lib/tree.js');
var trimBST = function(root, L, R) {
    if(!root || root.val < L || root.val > R)
        return root;
    if(root.left && root.left < L){
        root.left = root.left.right;
    }
    if(root.right && root.right > R)
        root.right = root.right.left;
    trimBST(root.left, L, R);
    trimBST(root.right, L, R);
    return root;
};
var s = trimBST(tre.serializeTree([1,0,2], 1, 2));
console.log(s);
console.log(tre.deserializeTree(trimBST(tre.serializeTree([1,0,2], 1, 2))));
console.log(tre.deserializeTree(trimBST(tre.serializeTree([3, 0, 4, null, 2, 1, null, null, null], 1, 3))));