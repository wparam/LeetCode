/**
 * Invert Binary Tree
 * 
 * Invert a binary tree.
 *   4
   /   \
  2     7
 / \   / \
1   3 6   9
 * to
 * 
 *   4
   /   \
  7     2
 / \   / \
9   6 3   1
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root)
        return root;
    if(!root.left && !root.right)
        return root;
    var temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
};