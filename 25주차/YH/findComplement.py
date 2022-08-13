class Solution:
    def findComplement(self, num: int) -> int:
        
        com = bin(num)
        result = com[2:]
        s = ''
        
        for i in result : 
            if i == "0" : 
                s += "1"
            elif i == "1" : s += "0"
                
        answer = int(s, 2)
        
        return answer