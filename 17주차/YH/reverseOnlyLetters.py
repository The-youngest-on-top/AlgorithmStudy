class Solution:
    def reverseOnlyLetters(self, s: str) -> str:
        
        non = [] # letter가 아닌 값
        alpha = [] # letter인 값
        
        answer = ''
        
        for i,l in enumerate(s) :
            if not l.isalpha() : non.append([i,l])
            else : alpha.append(l)
                        
        alpha.reverse()
        
        # 거꾸로 뒤집어진 letter에 letter의 고정 값 삽입
        for index,value in non : alpha.insert(index, value)
            
        answer = "".join(alpha)
        
        return answer