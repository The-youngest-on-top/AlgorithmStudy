class Solution:
    def isHappy(self, n: int) -> bool:
        
        visit = set()
        
        while n not in visit and n != 1:
            visit.add(n)
            n = sum(int(i) ** 2 for i in str(n))
            
        if (n == 1) : return True
        else : return False