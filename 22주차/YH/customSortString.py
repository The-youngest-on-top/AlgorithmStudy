class Solution:
    def customSortString(self, order: str, s: str) -> str:
        
        answer = ''.join(sorted(s, key=order.find))
        
        return answer
    