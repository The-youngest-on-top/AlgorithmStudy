# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        
        def checkTarget(node, sumValue) : 
            
            if(node) : sumValue -= node.val
            else : return None
            
            if (sumValue == 0 and (node.left == node.right == None)) : return True
            else : return checkTarget(node.left, sumValue) or checkTarget(node.right, sumValue)
            
        return checkTarget(root, targetSum)
        