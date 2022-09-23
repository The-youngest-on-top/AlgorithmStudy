# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        
        l = []
        
        def dfs(root) :
            if root.left :
                if not root.left.left and not root.left.right : 
                    l.append(root.left.val)
                dfs(root.left)
                
            if root.right :
                dfs(root.right)
                
        dfs(root)
        
        return sum(i for i in l)