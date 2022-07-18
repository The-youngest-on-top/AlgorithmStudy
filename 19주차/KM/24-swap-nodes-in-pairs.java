/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode p=head;
        if(p == null || p.next == null)
            return head;
        ListNode prev = head;
        ListNode cur = head.next;
        ListNode next = cur.next;

        prev.next=swapPairs(next);
        cur.next=prev;
      
     
        return cur; 
    }
}