class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        
        dp = [amount+1 for i in range(amount+1)]
        dp[0] = 0
        
        for i in range(amount+1) :
            for k in range(len(coins)) :
                if i-coins[k] >= 0 :
                    dp[i] = min(dp[i],dp[i-coins[k]]+1)
                    
        if dp[amount] == amount+1 : return -1
        else : return dp[amount]