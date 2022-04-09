class Solution:
    def climbStairs(self, n: int) -> int:
        
        if (n<=2) : return n
        
        prevValue = 1
        currValue = 2
        
        for i in range(2,n):
            temp = currValue
            currValue = prevValue + currValue
            prevValue = temp
            
        return currValue