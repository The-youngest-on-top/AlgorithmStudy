# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:

        aSet = set()
        
        # headA를 set에 각 node를 넣어놓고, headB를 돌며, 해당 head가 headA의 set에 있는지 확인하기만 하면 된다.
        
        while headA:
            aSet.add(headA)
            headA = headA.next
        
        while headB:
            if headB in aSet:
                return headB
            else:
                headB = headB.next
                
        return None