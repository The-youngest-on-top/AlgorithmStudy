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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int num1 = 0, num2 = 0;
        int up = 0;
        int sum;
        int i = 0, j = 0; 
        ListNode answer = new ListNode();
        ListNode prev = answer;
        while(l1 != null || l2 != null || up == 1){
            if(l1 != null){
                num1 = l1.val;
                l1 = l1.next;
            }
            if(l2 != null){
                num2 = l2.val;
                l2 = l2.next;
            }
            sum = num1 + num2 + up;
            System.out.println(sum+" " + num1 +" "+num2+" "+ up);
            if(sum > 9){
                up = 1;
                sum = sum%10;
            } else {
                up = 0;
            }
            ListNode temp = new ListNode(sum);
            prev.next = temp;
            prev = temp;
            sum = 0;
            num1 = 0;
            num2 = 0;
        }
        return answer.next;
    }
}