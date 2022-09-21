function sumOfLeftLeaves(root, left = false) {
    if(root === null) return 0;
    if(root.left === null && root.right === null) return left ? root.val : 0;
    return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right);
};