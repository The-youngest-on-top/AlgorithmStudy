class Solution {
    int maxDiameter = 0;
    public int diameterOfBinaryTree(TreeNode root) {
        getDiameter(root);
        return maxDiameter;
    }
    public int getDiameter(TreeNode start){
        if(start == null){
            return 0;
        }
        int left = getDiameter(start.left);
        int right = getDiameter(start.right);
        maxDiameter = Math.max(left+right, maxDiameter);
        return Math.max(left,right) + 1;
    }
    
}