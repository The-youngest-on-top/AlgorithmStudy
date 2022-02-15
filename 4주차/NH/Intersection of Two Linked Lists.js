 function getIntersectionNode(headA, headB) {
    let sample_a=[];
    let sample_b=[];
    
    function sample_A(head){
        if(head==null)return 0;
        sample_a.push(head);
        sample_A(head.next);
    }
     function sample_B(head){
        if(head==null)return 0;
        sample_b.push(head);
        sample_B(head.next);
    }
    sample_A(headA);
    sample_B(headB);
    
    for(let num of sample_b){
     if(sample_a.includes(num)){
         return num;
     }
    }
};