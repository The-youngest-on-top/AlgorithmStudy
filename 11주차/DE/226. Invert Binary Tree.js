function invert(node){
    if(node == null){
        return;
    }
    let temp = new TreeNode();

    temp = node.left;
    node.left = node.right;
    node.right = temp;
    invert(node.left);
    invert(node.right);
}

function invertTree(root) {
invert(root);
return root;
};