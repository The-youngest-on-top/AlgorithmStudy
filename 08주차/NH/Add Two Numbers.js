function addTwoNumbers(l1, l2) {
    let sample=[];
    let sample1=[];
    let sum=0;
    function self(l1){
        if(l1==null)return;
        sample.push(l1.val);
        self(l1.next);
    }
    function self1(l2){
        if(l2==null)return;
        sample1.push(l2.val);
        self1(l2.next);
    }
    self(l1);
    self1(l2);
    sample=sample.reverse().join("");
    sample1=sample1.reverse().join("");
    sum=BigInt(sample)+BigInt(sample1);
    sum=String(sum).split("")
    for(let i=0; i<sum.length; i++){
        sum[i]=BigInt(sum[i]);
    }
    let answer=new ListNode(0);
    for(let i=0; i<sum.length; i++){
          answer.next=new ListNode(sum[i],answer.next);
    }
    answer=answer.next;
  
    return answer;
   
    
};