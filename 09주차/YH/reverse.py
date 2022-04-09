class Solution:
    def reverse(self, x: int) -> int:
        
        answer = ''
        
        if x > 0 : 
            List = list(str(x))
            
            for i in List[::-1] : 
                answer += i
            
            while 1 : 
                if answer[0] == '0' : answer = answer[1:]
                else : break
                
        elif x < 0 : 
            List = list(str(x))
                
            for i in List[len(List):0:-1] : 
                answer += i
                
            while 1 : 
                if answer[0] == '0' : answer = answer[1:]
                else : break
            
            answer = '-' + answer
            
        elif x == 0 : answer = '0'
        
        value = int(answer)
            
        if -2147483648 <= value <= 2147483647 : return value
        else : return 0