function mergeTrees(root1, root2) {
    function self(root1,root2){
        if(root1&&root2){
            let sample=new TreeNode(root1.val+root2.val);
            sample.left=self(root1.left,root2.left);
            sample.right=self(root1.right,root2.right);
            return sample;
        }
        return root1||root2;
    }
    return self(root1,root2);
};