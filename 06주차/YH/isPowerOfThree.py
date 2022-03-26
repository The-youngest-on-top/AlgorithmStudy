class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        
        if (n == 0) : return False
        
        while (n != 0 and n != 1) : 
            if n % 3 != 0 :
                return False  
            else :
                n //= 3
        
        if (n == 1) : return True
        else : return False
        