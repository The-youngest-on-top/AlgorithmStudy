class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        
        n = len(s)
        dic = {}
        
        for i in range(n) :
            
            if s[i] in dic :
                if dic[s[i]] != t[i] : return False
            elif t[i] in dic.values() : return False
            else : dic[s[i]] = t[i]
                
        return True