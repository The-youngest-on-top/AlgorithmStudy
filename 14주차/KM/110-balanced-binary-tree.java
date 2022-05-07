/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    boolean answer = true;
    public boolean isBalanced(TreeNode root) {
        checkBalanced(root);
        return answer;
    }
    public int checkBalanced(TreeNode node){
        if(node == null){
            return 0;
        }
        int left = checkBalanced(node.left);
        int right = checkBalanced(node.right);
        if(Math.abs(left - right) > 1){
            answer = false;
        }
        return Math.max(left,right)+1;
    }
}