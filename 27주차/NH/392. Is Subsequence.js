function isSubsequence(s, t) {
    let i=0;
    let count=0;
    while(i<s.length){
         for(let val of t){
            if(s[i]==val){
                t=t.split("").splice(t.indexOf(val)+1,t.length+1).join("");
                count++;
                break;
            }
        }
        i++;
    }
    if(count==s.length)return true;
    else return false;
};
