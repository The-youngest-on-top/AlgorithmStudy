class Solution:
    def mySqrt(self, x: int) -> int:
        
        if (x == 0) : return 0
        elif (x == 1) : return 1
        
        else : 
            answer = int(math.sqrt(x))
        
        return answer