class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        
        s = list(set(nums))
        s.sort(reverse=True)
        
        if len(s) < 3 : return max(s)
        else : return s[2]