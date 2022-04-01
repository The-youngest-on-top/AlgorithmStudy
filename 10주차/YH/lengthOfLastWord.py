class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        
        List = list(map(str, s.split( )))
        answer = List[-1]
        return len(answer)