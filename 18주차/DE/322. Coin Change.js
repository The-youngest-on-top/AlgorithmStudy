/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 function coinChange(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity)

    dp[0] = 0
    
    for(let c of coins){
        for(let i = c; i < amount+1; i++){
            if(dp[i] > dp[i - c] + 1) dp[i] = dp[i - c] + 1;
        }
    }
    return dp[amount] != Infinity ? dp[amount] : -1
    
};