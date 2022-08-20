/**
 * @param {number} n
 * @return {number}
 */
 function countVowelStrings(n) {
    let dp = [0,1,1,1,1,1];
    
    for(let i = 1; i <= n; i++){
        for(let k = 1; k <= 5; k++){
            dp[k] += dp[k - 1];
        }
    }
    
    return dp[5];
};