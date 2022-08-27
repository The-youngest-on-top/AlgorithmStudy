function findContentChildren(g, s) {
    s.sort((a,b)=>a-b); 
    g.sort((a,b)=>a-b);
    let count=0;
    for(let i=0; i<g.length; i++){
        for(let j=0; j<s.length; j++){
            if(g[i]<=s[j]){
                count++;
                s.splice(j,1);
                j--;
                break;
            }
            
        }
    }
    return count;
};