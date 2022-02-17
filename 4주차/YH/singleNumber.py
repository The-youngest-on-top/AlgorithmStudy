class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        
        # XOR 정답 보고 했음..ㅠㅠ
        result = 0
        
        for i in nums:
            result = i ^ result
        
        return result