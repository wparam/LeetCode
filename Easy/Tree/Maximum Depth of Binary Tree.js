/**
 * Given a binary tree, find its maximum depth.
 * The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */


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
var maxDepth = function(root) {
    if(!root)
        return 0;
    if(!root.left && !root.right)
        return 1;
    var leftdepth = 0,
        rightdepth = 0;
    if(root.left)
        leftdepth =  maxDepth(root.left) + 1;
    if(root.right)
        rightdepth = maxDepth(root.right) + 1;
    return Math.max(leftdepth, rightdepth);
};