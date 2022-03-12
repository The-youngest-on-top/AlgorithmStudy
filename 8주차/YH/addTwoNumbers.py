# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        
        def toInt(node) : 
            if node : 
                return node.val + 10 * toInt(node.next)
            else : 
                return 0
        
        def toList(n) : 
            node = ListNode(n % 10)
            
            if n > 9 : node.next = toList(n // 10)
            
            return node
        
        a = toInt(l1)
        b = toInt(l2)
        
        return toList(a + b)