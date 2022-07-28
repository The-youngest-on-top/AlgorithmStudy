class Solution:
    def minimumSum(self, num: int) -> int:
        
        digits = []
    
        while num != 0 :
            digits.append(num % 10)
            num //= 10
      
            digits.sort()
    
        return (digits[0] + digits[1])*10 + digits[2] + digits[3]