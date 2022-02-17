class Solution:
    def isPalindrome(self, s: str) -> bool:
        
        answer = ""
        result = s.lower()
    
        for x in result : 
            if x.islower() or x in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] : answer += x
    
        reversedAnswer = answer[::-1]
        
        if len(answer) <= 1 : return True
        
        if (reversedAnswer == answer) : 
            return True
        else : return False