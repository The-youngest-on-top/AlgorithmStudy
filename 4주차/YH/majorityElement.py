class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        
        nums.sort()
        result = nums[int(len(nums)/2)]
        
        return result