class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        
        answer = -1
       
        if needle in haystack:
            answer = haystack.index(needle)
        
        return answer