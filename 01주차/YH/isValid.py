class Solution:
    def isValid(self, s: str) -> bool:
        
        stack = []
        
        for i in range(len(s)) : 
            if (s[i] == '(') : stack.append(s[i])
            elif (s[i] == '{') : stack.append(s[i])
            elif (s[i] == '[') : stack.append(s[i])
            
            if (s[i] == ')') : 
                if (len(stack) == 0) : return False
                top = stack.pop()
                if (top != '(') : return False
            
            if (s[i] == '}') : 
                if (len(stack) == 0) : return False
                top = stack.pop()
                if (top != '{') : return False
                
            if (s[i] == ']') : 
                if (len(stack) == 0) : return False
                top = stack.pop()
                if (top != '[') : return False

        if (len(stack) == 0) : return True
