class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        
        expected = sorted(heights)
        
        cnt = 0
        
        for i in range(len(heights)) : 
            
            if expected[i] != heights[i] : 
                cnt += 1
                
        return cnt