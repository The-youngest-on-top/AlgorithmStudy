function invertTree(root) {
    
    function sample(root){
        if(root==null)return;
        let temp =new TreeNode();
        
        temp=root.left;
        root.left=root.right;
        root.right=temp;
        
        sample(root.left);
        sample(root.right);
    }
    sample(root);
    return root;
};