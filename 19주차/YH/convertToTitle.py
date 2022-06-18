class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        
        answer = ''
        
        while columnNumber > 0 :
            columnNumber -= 1
            answer = chr(columnNumber % 26 + ord('A')) + answer
            columnNumber //= 26
    
    
        return(answer)