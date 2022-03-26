class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        
        sumDigitsString = ""
        sumDigits = 0
        result = []
        index = 0
        
        for i in range(len(digits)) : 
            sumDigitsString += str(digits[i])
            
        sumDigits = int(sumDigitsString) + 1
        
        result = list(map(int, str(sumDigits)))
        
        return result