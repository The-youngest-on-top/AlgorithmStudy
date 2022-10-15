class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:

        if nums.count(target) < 1 : return [-1, -1]
        
        index1 = nums.index(target)
        
        nums = nums[::-1]
        
        index2 = len(nums) - (nums.index(target) + 1)
        
        return [index1, index2]