class Solution:
    def fib(self, n: int) -> int:
        
        dp0, dp1 = 0, 1
        
        for i in range(n) :
            dp0, dp1 = dp1, dp1+dp0
            
        return dp0