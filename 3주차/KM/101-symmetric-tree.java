class Solution {
    public boolean isSymmetric(TreeNode root) {
        return checkSymmetric(root,root);
    }
    boolean checkSymmetric(TreeNode leftSide,TreeNode rightSide){
        if(leftSide == null && rightSide == null){
            return true;
        }
        if(leftSide == null || rightSide == null){
            return false;
        }
        if(leftSide.val != rightSide.val) {
            return false;
        }
        boolean left = checkSymmetric(leftSide.left, rightSide.right);
        boolean right = checkSymmetric(leftSide.right, rightSide.left);
        return left && right;
    }
}