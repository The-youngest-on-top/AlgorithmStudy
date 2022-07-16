class Solution:
    def findTheDistanceValue(self, arr1: List[int], arr2: List[int], d: int) -> int:
        
        ans=len(arr1)
        
        for i in arr1 :
            for j in arr2 :
                if abs(i-j) <= d :
                    ans -= 1
                    break
        return ans