class Solution:
    def partition(self, s: str) -> List[List[str]]:
        
        def is_palindrome(s, l, r):
            while l < r:
                if s[l] != s[r]:
                    return False
                l += 1
                r -= 1
            return True
            
        ans = [[] for _ in range(len(s)+1)]
        ans[0].append([])
        
        for i in range(len(s)):
            for start in range(i+1):
                if is_palindrome(s, start, i):
                    substr = s[start:i+1]
                    for parts in ans[start]:
                        ans[i+1].append(parts + [substr])
        return ans[-1]
