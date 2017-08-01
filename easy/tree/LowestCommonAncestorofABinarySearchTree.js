//  Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v 
//and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

//         _______6______
//        /              \
//     ___2__          ___8__
//    /      \        /      \
//    0      _4       7       9
//          /  \
//          3   5

// For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, 
//since a node can be a descendant of itself according to the LCA definition.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    var l1 = [],
        l2 = [];
    var current1 = root,
        current2 = root;
    while(current1.val!==p.val){
        l1.push(current1);
        current1 = current1.val > p.val ?  current1.left : current1.right;
    }
    l1.push(current1);
    while(current2.val!==q.val){
        l2.push(current2);
        current2 = current2.val > q.val ?  current2.left : current2.right;
    }
    l2.push(current2);
    for(var i=l1.length-1; i>=0; i--)
        for(var j=l2.length-1; j>=0; j--){
            if(l2[j] === l1[i])
                return l2[j];
        }
    
};