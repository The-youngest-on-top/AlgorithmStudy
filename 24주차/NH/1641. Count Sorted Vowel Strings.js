function countVowelStrings(n) {
    let a=1, e=1, i=1, o=1, u=1,j=1;
    if(n==1)return 5;
    while(j<n){
        a = a + e + i + o + u
        e = e + i + o + u
        i = i + o + u
        o = o + u
        u = u
        j++;
    }
    return a + e + i + o + u
};