# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        
        answer = None
        
        while head : 
            answer = ListNode(head.val, answer)
            head = head.next
        
        return answer