/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 function findContentChildren(g, s) {
    answer = 0;
    g.sort((a, b)=>a-b)
    s.sort((a, b)=>a-b)
    let gidx = 0
    let sidx = 0
    while(gidx < g.length && sidx < s.length){
        if(g[gidx] <= s[sidx]){
            gidx++
            sidx++
            answer++
        }
        else{
            sidx++
        }
    }
    return answer
};