function diameterOfBinaryTree(root) {
    let max=0;
    function self(root){
        if(root==null)return 0;
        
        let left=self(root.left);
        let right=self(root.right);
        
        if(left+right>max)max=left+right;
        max=Math.max(max,left+right);
        
        return Math.max(left,right)+1;
    }
    self(root);
    return max;
};
