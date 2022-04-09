class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        left = 0
        right = 1
        m = 0
        
        while right < len(prices) :
            
            currentProfit = prices[right] - prices[left]
            if prices[left] < prices[right] : m = max(currentProfit,m)
            else : left = right
            right += 1
            
        return m