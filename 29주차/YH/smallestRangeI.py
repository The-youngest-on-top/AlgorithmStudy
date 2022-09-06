class Solution:
    def smallestRangeI(self, nums: List[int], k: int) -> int:
        
        l, r = min(nums) + k, max(nums) - k
        
        return 0 if l >= r else r - l
