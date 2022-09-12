class Solution:
    def arrangeCoins(self, n: int) -> int:
        
        low, high = 1, n
        
        while low<=high :
            
            mid = (low+high)//2
        
            if mid*(mid+1)//2 == n : return mid
            if n < mid*(mid+1)//2 : high = mid - 1
            else : low = mid + 1
                
        return high