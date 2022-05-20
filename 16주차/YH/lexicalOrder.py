class Solution:
    def lexicalOrder(self, n: int) -> List[int]:
        
        answer = []
        num = 1
        
        while len(answer) != n :
            if num <= n :
                answer.append(num)
                num *= 10
            else :
                num //= 10
                num += 1
                while num % 10 == 0 : num //= 10
                    
        return answer