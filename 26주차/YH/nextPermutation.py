class Solution(object):
    def nextPermutation(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        
        n = len(nums)
        i = n - 1
        
        while i >= 1 and nums[i-1] >= nums[i] :
            i -= 1
            
        for k in range(n-1, i-1, -1) :
            if nums[k] > nums[i-1] :
                nums[k], nums[i-1] = nums[i-1], nums[k]
                break
                
        nums[i:] = sorted(nums[i:])
        return nums