/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 function removeNthFromEnd(head, n) {
    if(head.next == null){
        return null
    }
    node = head
    cnt = 0
    while(node != null){
        node = node.next
        cnt += 1
    }
    node = head
    if(cnt - n - 1 < 0){
        return head = node.next
    }
    for(let i = 0; i < cnt - n - 1; i++){
        node = node.next
    }
    node.next = node.next.next
    return head;
};