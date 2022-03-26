# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        
        List = []
        reverseList = []
        
        while head : 
            List.append(head.val)
            reverseList.append(head.val)
            head = head.next
            
        reverseList.reverse()
        
        if (reverseList == List) : return True
        else : return False