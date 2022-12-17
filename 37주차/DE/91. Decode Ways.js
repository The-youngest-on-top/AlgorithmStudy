/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
    if(s.length === 0 || s[0] === '0') return 0
    let dp = new Array(s.length+1).fill(0)
    dp[0] = 1
    dp[1] = 1
    for(let i = 2; i < s.length+1; i++){
        let one = Number(s.slice(i-1, i))
        let two = Number(s.slice(i-2, i))

        if(one > 0){
            dp[i] += dp[i-1]
        }
        if(two > 9 && two < 27){
            dp[i] += dp[i-2]
        }
    }

    return dp[s.length]
};