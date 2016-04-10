const util = require('util');
var tre = require('./lib/tree.js');

var invertTree = function(root) {
    if(!root)
        return root;
    if(!root.left && !root.right)
        return root;
    var temp;
    temp = root.left;
    root.left = root.right;
    root.right = temp;
    if(root.left){
        invertTree(root.left);
    }
    if(root.right){
        invertTree(root.right);
    }
    return root;
};

var tree = tre.serializeTree([2,3,null,1]);
var result = invertTree(tree);
console.log(tre.deserializeTree(result));
//console.log(JSON.stringify(tre.serializeTree([1,2,3,4,6,7,8])));
