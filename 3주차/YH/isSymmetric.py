# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        
        answer = False
        left = []
        right = []
        
        if root is None : answer = False

        # 이거 인터넷 보고 했다....어려웠어ㅠㅠ
        def isSubtreeSymmetric(left, right):
            if not left and not right : return True
            elif not left or not right: return False
            else:
                return left.val == right.val and isSubtreeSymmetric(left.left, right.right) and isSubtreeSymmetric(left.right, right.left)
            
        answer = isSubtreeSymmetric(root, root)
        
        return answer