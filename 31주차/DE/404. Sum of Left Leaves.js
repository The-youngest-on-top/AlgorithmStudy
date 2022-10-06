/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 function sumOfLeftLeaves(root) {
    let sum = 0
    function dfs(node){
        if(node===null) return;
        if(node.left != null && node.left.left === null && node.left.right === null) sum+=node.left.val
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return sum
};