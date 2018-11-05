const tree = require('../../../lib/tree');

const main = (root)=>{
    let result = [];
    preorder(root, result);
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

const preorderLoop = (root) => {
    if(!root)  
        return root;
    let res = [];
    res.push(root.val);
    while(root.left)

    return res;
}



main(tree.serializeTree([1,2,3,4,5,6,7]));