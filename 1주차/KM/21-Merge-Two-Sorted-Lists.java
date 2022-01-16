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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode mergeList = new ListNode(-1); // 비어있는 Head 
        ListNode temp = mergeList;
        while(list1 != null && list2 != null){
            if(list1.val < list2.val){
                // 둘 중 작은 값을 temp 다음 노드로 이어주고 다음 노드로 넘어간다.
                temp.next = list1;
                list1= list1.next;
            } else {
                temp.next = list2;
                list2 = list2.next;
            }
            temp = temp.next;
        }
        
        // null이 아닌 list를 next로 넘겨준다. 둘 다 null이면 어떤 값이던 null
        if(list1 == null)
            temp.next = list2;
        else temp.next = list1;
        
        // mergeList는 그냥 시작용으로 만들어놓은 껍데기 이므로 next가 진짜 시작 노드이다.
        return mergeList.next;
    }
}
