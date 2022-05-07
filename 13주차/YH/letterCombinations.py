class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        
        pad = {'2' : 'abc', 
               '3' : 'def', 
               '4' : 'ghi', 
               '5' : 'jkl', 
               '6' : 'mno', 
               '7' : 'pqrs', 
               '8' : 'tuv', 
               '9' : 'wxyz'}

        s = [pad[i] for i in digits]
        
        # itertools는 반복적인 함수를 위한 것임
        # product는 모든 조합을 위할 때 사용
        answer = [''.join(x) for x in itertools.product(*s) if x]
        
        return answer