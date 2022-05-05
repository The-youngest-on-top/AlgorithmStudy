class Solution:
    def addBinary(self, a: str, b: str) -> str:
        
        c = int(a, 2) + int(b, 2)
        answer = str(bin(c)[2:])
        
        return answer