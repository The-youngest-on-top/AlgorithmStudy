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
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode temp = head;
        ListNode prev = null;
        int cnt = 0;
        while(temp!=null){
            cnt++;
            temp = temp.next;
        }
        int target = cnt - n;
        cnt = 0;
        temp = head;
        while(cnt != target){
            prev = temp;
            temp = temp.next;
            cnt++;
        }
        if(prev == null){
            if(temp.next != null){
                return temp.next;
            } else {
                return null;
            }
        } else {
            prev.next = temp.next;
        }
        
        return head;
    }
}