const tree = require('../../../lib/tree');

const main = (root)=>{
    let result = [];
    result = preorderLoop(root);
    console.log(result);
}

const preorderRec = (root, arr) => {
    if(!root)
        return;
    arr.push(root.val);
    if(root.left)
        preorder(root.left, arr);
    if(root.right)
        preorder(root.right, arr);
};

//use stack to record once reach the bottom
const preorderLoop = (root) => {
    if(!root)  
        return root;
    let res = [],
        node = root;
    while(node){
        res.push(node.val);
        if(node.left)
            node = node.left;
        if(node.right)
            node = node.right;
        
    }
    return res;
}



main(tree.serializeTree([1,2,3,4,5,6,7]));