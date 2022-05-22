# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        
        if head.next == None : return None
        
        tmp = head
        size = 0
        
        # size 구하기
        while tmp :
            size += 1
            tmp = tmp.next
            
        tmp = head
        
        # size와 지워야 하는 위치가 같다면 첫 번째 값을 지우기
        if n == size : return head.next
        
        # 지워야 하는 값 이전의 node들을 tmp에 저장
        for i in range(size-n-1) : tmp = tmp.next
            
        # 지워야 하는 값 이전과 이후의 값들을 연결
        tmp.next = tmp.next.next
        return head