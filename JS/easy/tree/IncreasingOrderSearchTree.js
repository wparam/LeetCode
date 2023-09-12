// Given a tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

// Example 1:
// Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

//        5
//       / \
//     3    6
//    / \    \
//   2   4    8
//  /        / \ 
// 1        7   9

// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

//  1
//   \
//    2
//     \
//      3
//       \
//        4
//         \
//          5
//           \
//            6
//             \
//              7
//               \
//                8
//                 \
//                  9  
// Note:

// The number of nodes in the given tree will be between 1 and 100.
// Each node will have a unique integer value from 0 to 1000.

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
const tree = require('../../lib/tree');

var increasingBST = function(root) {
    return inOrder(root, null);
};

const inOrder = (root, tail) =>{
    // if this null node was a left child, tail is its parent
    // if this null node was a right child, tail is its parent's parent
    if(!root)
        return tail;
        
    //recursive call, traversing left while passing in the current node as tail
    let head = inOrder(root.left, root); // get the leftest node in the tree

    // we don't want the current node to have a left child, only a single right child
    root.left = null;

    // # we set the current node's right child to be tail
    // # what is tail? this part is important
    // # if the current node is a left child, tail will be its parent
    // # else if the current node is a right child, tail will be its parent's parent
    root.right = inOrder(root.right, tail);

    // # throughout the whole algorithm, res is the leaf of the leftmost path in the original tree
    // # its the smallest node and thus will be the root of the modified tree
    return head;
};

console.log(tree.deserializeTree(increasingBST(tree.serializeTree([54,null,57,788,null,null,876]))));