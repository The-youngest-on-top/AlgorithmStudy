class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        
        answer = 0
        
        for i in columnTitle:
            answer *= 26
            answer += ord(i) - 64
        return answer