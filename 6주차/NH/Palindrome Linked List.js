function isPalindrome(head) {
    let sample=[];
    let compare=[];
    let temp=[];
    function palindrome(head){
    if(head==null)return ;
    sample.push(head.val);
    palindrome(head.next);
    }
    palindrome(head);
    for(let num of sample) {
        temp.push(num);
    }
    compare=sample.reverse();
    for(let i=0; i<=compare.length; i++){
       if(compare[i] != temp[i])
           return false;
   }
    return true;
};