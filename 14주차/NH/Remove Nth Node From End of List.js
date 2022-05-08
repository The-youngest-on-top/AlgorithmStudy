function removeNthFromEnd(head, n) {
    let slow=head
    let fast = head
     
     for (let i = 0; i < n; i++){
         fast = fast.next;
     } 
     if (!fast) 
         return head.next
     
     while (fast.next) {
         fast = fast.next;
         slow = slow.next
     }
     slow.next=slow.next.next;
     return head;
 };