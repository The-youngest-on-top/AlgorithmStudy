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
 function minDepth(root) {
    if(!root) return 0;
    
    if(!root.left && !root.right) {
        return 1;
    }
    
    let left = minDepth(root.left) + 1;
    let right = minDepth(root.right) + 1;
    
    if(!root.left) return right;
    if(!root.right) return left;

    return Math.min(left, right);
};