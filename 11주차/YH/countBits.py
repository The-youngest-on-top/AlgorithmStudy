class Solution:
    def countBits(self, n: int) -> List[int]:
        
        answer = []
        
        for i in range(0, n+1) : 
            value = bin(i)[2:]
            answer.append(str(value.count('1')))
        
        return answer