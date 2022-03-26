class Solution:
    def longestPalindrome(self, s: str) -> str:
        
#         # 한 글자인 경우
#         if len(s) == 1 : return s
        
#         # set 이용
#         if len(set(s)) == 1 : return s
        
        # 이 부분은 time limit exceeded 나옴 ㅜㅜㅜ
#         m = ''
        
#         for i in range(0, len(s)) : 
#             for j in range(len(s), 0, -1) : 

#                 word = s[i : len(s) - j + 1]
#                 if word == word[::-1] : 
#                     if len(m) < len(word) : m = word

        
#         return(m)
    
    
        dp = [[False] * len(s)  for _ in range(len(s))]
        
        answer = ''
        for i in range(len(s)) :
            dp[i][i] = True
            answer = s[i]
            
        maxLen = 1
        
        for start in range(len(s)-1, -1, -1) :
            for end in range(start+1, len(s)) :             
                
                if s[start] == s[end] :
                    if end - start == 1 or dp[start+1][end-1] :
                        dp[start][end] = True

                        if maxLen < end - start + 1 :
                            maxLen = end - start + 1
                            answer = s[start: end+ 1]
        
        return answer