class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        
        sortedList = sorted(nums)[::2]
        answer = sum(sortedList)
        
        return answer