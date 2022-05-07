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
 * @return {boolean}
 */
 function nthNode(node){
    if(node == null){
        return 0;
    }
    
    let nthleft = nthNode(node.left);
    let nthright = nthNode(node.right);

    if(nthleft == -1 || nthright == -1 || Math.abs(nthleft - nthright) > 1) {
        return -1;
    }
    return 1 + Math.max(nthNode(node.left), nthNode(node.right))
}

function isBalanced(root) {
    if(root == null) {
        return true;
    }

    return nthNode(root) != -1;

};