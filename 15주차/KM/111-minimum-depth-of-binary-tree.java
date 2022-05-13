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
    int min = Integer.MAX_VALUE;
    public int minDepth(TreeNode root) {
        if(root == null) return 0;
        dfs(root, 1); 
        return min;
    }
    public void dfs(TreeNode node, int depth){
        if(node == null) {
            return;
        }
        if(node.left == null && node.right == null){
            min = Math.min(depth, min);
        }
        dfs(node.left, depth+1);
        dfs(node.right, depth+1);
    }
}