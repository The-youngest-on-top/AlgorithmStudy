 function lengthOfLastWord(s) {
    let length=0;
    let i=s.length-1;
    let count=0;
    s=s.split("");
    
    if(s[i]==" "){
        for(let j=i; j>=0; j--){
        if(s[j]==" "){
            s.pop();
        }
        else{
            break;
        }
    }
    }
    let k=s.length-1;
    while(s[k]!=" "){
        if(k==0){
            return s.length;
            break;
        }
        length++;
        k--;
        
    }
    return length;
};
