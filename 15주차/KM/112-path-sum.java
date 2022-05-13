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
    boolean answer = false;
    public boolean hasPathSum(TreeNode root, int targetSum) {
        dfs(root, 0, targetSum);
        return answer;
    }
    public void dfs(TreeNode node, int sum, int targetSum){
        if(node == null) return;
        sum += node.val;
        if(node.left == null && node.right == null && sum == targetSum){
            answer = true;
        }
        dfs(node.left, sum, targetSum);
        dfs(node.right, sum , targetSum);
    }
}