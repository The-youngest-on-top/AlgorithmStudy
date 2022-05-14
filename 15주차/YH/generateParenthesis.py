class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        
        # 보고 했음 근데 이 사람은 찐이야..
        
        def generate(p, left, right, parens=[]) :
            if left : generate(p + '(', left-1, right)
            if right > left : generate(p + ')', left, right-1)
            if not right : parens += p,
            
            return parens
    
        return generate('', n, n)