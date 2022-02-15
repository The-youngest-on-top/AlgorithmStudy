function reverseList(head) {
    let prev = null;
      while (head) {
          let temp = head.next;    
          head.next = prev;      
          prev = head;       
          head = temp;       
      }
      return prev;
  };