class Solution:
    def divisorGame(self, n: int) -> bool:
        
        dp = [False for i in range(n + 1)] 
        dp[0] = True
        
        for i in range(1, n + 1) :
             for j in range(1, i) :
                    if i % j == 0 and not dp[i - j] :
                        dp[i] = True
                        break
        return dp[n]