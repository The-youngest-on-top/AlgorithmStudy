class Solution:
    def search(self, nums: List[int], target: int) -> int:

        lower = 0
        upper = len(nums)-1
        
        while lower <= upper :
            mid = (lower) + (upper-lower) // 2
            if nums[mid] == target :
                return mid
            elif nums[mid] < target :
                lower = mid + 1
            else :
                upper = mid - 1
        return -1