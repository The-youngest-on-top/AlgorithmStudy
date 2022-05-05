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
    public ListNode deleteDuplicates(ListNode head) {
        ListNode cur = head;
        while(cur != null){
            ListNode temp = cur.next;
            if(temp == null) {
                cur.next = temp;
                break;
            }
            if(cur.val == temp.val){
                while(temp != null){
                    if(cur.val != temp.val){
                        break;
                    }
                    temp = temp.next;
                }
                cur.next = temp;
            }
            cur = cur.next;
        }
        return head;
    }
}