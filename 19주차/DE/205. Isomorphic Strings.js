/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 function isIsomorphic(s, t) {
    let dicS = {}
    let dicT = {}
    for(let i = 0; i < s.length; i++){
        if(s[i] in dicS){
            if(dicS[s[i]] != t[i]) return false;
        }
        if(t[i] in dicT){
            if(dicT[t[i]] != s[i]) return false;
        }
        dicS[s[i]] = t[i]
        dicT[t[i]] = s[i]
        
    }
    return true
};