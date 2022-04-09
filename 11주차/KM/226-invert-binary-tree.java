class Solution {
    public TreeNode invertTree(TreeNode root) {
        if(root == null) return null;
        TreeNode temp = new TreeNode(root.val, root.left, root.right);
        temp.left = invertTree(root.right);
        temp.right = invertTree(root.left);
        return temp;
    }
}