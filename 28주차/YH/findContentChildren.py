class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        
        c = i = j = 0
        g.sort()
        s.sort()
        while i < len(g) and j < len(s) :
            if s[j] >= g[i] : c, i = c+1, i+1
            j += 1
            
        return c