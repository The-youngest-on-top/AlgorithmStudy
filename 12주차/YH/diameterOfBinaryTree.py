# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        
        def depth(root) :
            if not root : return 0
            depthL = depth(root.left)
            depthR = depth(root.right)
            answer[0] = max(answer[0], depthL + depthR)
            
            return 1 + max(depthL, depthR)
        
        answer = [0]
        depth(root)
        return answer[0]