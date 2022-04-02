class Solution:
    def myAtoi(self, s: str) -> int:
        
        sign =  1
        index = 0
        
        if len(s) == 0 : return 0
        
        for i in range(len(s)) : 
            if s[i] != ' ' :
                index = i
                break
    
        if s[index] == '-' :
            sign = -1
            index += 1
            
        elif s[index] == '+' :
            index += 1
    
        num = ''
        while index < len(s) and s[index].isnumeric() :
            num += s[index]
            index += 1
        
        if num == '' : return 0
        
        result = int(num)*sign
        
        # 범위 넘어가는지 확인
        if result > (2**31)-1 : return (2**31)-1
        if result < -(2**31) : return -(2**31)
        
        return result