class Solution:
    def findLHS(self, nums: List[int]) -> int:
        s = Counter(nums)
        l = 0
        
        for i in s :
            if i+1 in s :
                l = max(s[i] + s[i+1], l)
                
        return l