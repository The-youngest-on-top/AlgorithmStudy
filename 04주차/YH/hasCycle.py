# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        
        while(head != None) : 
            
            if (head.val == 1000000) : return True
            
            head.val = 1000000
            head = head.next
        
        return False
    
# time out 이기는 한데... 비슷하게 다른 방법? 생각해봄

# class Solution:
#     def hasCycle(self, head: Optional[ListNode]) -> bool:
        
#         while(head != None) : 
            
#             temp = []
            
#             for i in temp : 
#                 if i == head.val : return True
#                 else : 
#                     temp.append(head.val)
#                     head = head.next
            
#         return False