class Solution:
    def addDigits(self, num: int) -> int:
        
        if num == 0 : return 0
        r = num % 9
        
        return r if r != 0 else 9