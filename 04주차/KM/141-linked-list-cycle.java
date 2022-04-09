public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode cur = head;
        while(cur != null){
            if(cur.val == -10000000)
                return true;
            cur.val = -10000000;
            cur = cur.next;
        }
        return false;
    }
}
