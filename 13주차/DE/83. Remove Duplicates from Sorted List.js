/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 function deleteDuplicates(head) {
    pre = head
    if(head == null){
        return head
    }
    node = head.next
    
    while(node != null){
        if(pre.val == node.val){
            pre.next = node.next
        }
        else{
            pre = node
        }
        node = node.next
    }

    return head;
};