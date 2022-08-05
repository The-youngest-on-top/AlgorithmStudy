class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        
        nums.sort()
        result = [[]]
        
        for num in nums :
            result += [i + [num] for i in result]
        return result