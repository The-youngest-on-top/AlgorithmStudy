function wordPattern(pattern, s) {
    pattern =pattern.split("");
    s=s.split(" ");
    if(pattern.length!=s.length)return false;
    if([...new Set(pattern)].length!=[...new Set(s)].length)return false;
    
    let object = {};
    let sample = [...new Set(pattern)];
    
    for(let num of sample){
     object[num]=s[pattern.indexOf(num)];   
    }
    
    for(let i=0; i<s.length; i++){
        if(object[pattern[i]]!=s[i])return false;
    }
    
    return true;
};