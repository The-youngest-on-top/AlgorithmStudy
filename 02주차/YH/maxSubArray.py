class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        
        dp = nums
        
        maxValue = dp[0]
        
        for i in range(1, len(nums)) :
            if (dp[i] < dp[i-1] + nums[i]) : 
                dp[i] = dp[i-1] + nums[i]
                
            if (maxValue < dp[i]) : 
                maxValue = dp[i]
        
        return maxValue