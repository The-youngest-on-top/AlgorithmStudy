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
 function swapPairs(head) {
    let node = head;
    while(node !== null){
       if(node.next == null) break;
       let temp = node.next.val
       node.next.val = node.val;
       node.val = temp;
        node = node.next.next;
   }
    return head;
};