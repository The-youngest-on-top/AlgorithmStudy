class Solution:
    def tribonacci(self, n: int) -> int:
        
        n1, n2, n3 = 0, 1, 1
        
        for _ in range(n) :
            n1, n2, n3 = n2, n3, n1+n2+n3
            
        return n1