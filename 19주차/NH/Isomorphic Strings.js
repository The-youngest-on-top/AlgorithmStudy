function isIsomorphic(s, t) {
    let same_s=[];
    let same_t=[];
    
    for(let i=0; i<s.length; i++){
        same_s.push(s.indexOf(s[i]));
        same_t.push(t.indexOf(t[i]));
    }
    for(let i=0; i<s.length; i++){
        if(same_s[i]!=same_t[i])return false;
    }
    return true;
};