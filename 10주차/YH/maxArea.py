class Solution:
    def maxArea(self, height: List[int]) -> int:
        # 권낙현 풀이 따라하기... ㅎ 그러니깐 왜 저렇게 되는 거임?
        m = 0
        i = 0
        j = len(height) - 1
        
        while i < j :
            area = min(height[i], height[j]) * (j - i)
            m = max(m, area)
            if(height[i]<=height[j]) : i += 1
            else : j -= 1
                
        return m