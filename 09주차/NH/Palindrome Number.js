function isPalindrome(x) {
    let sample=String(x);
    let a=[];
    
    sample=sample.split("");
    for(let num of sample){
        a.push(num);
    }
    a=a.reverse();
      
    for(let i=0; i<a.length; i++){
        if(a[i]!=sample[i]){
            return false;
        }
    }
    return true;
};