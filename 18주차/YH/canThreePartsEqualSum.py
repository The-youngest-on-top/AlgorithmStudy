class Solution:
    def canThreePartsEqualSum(self, arr: List[int]) -> bool:
        
        avg = sum(arr) / 3
        
        cnt = 0
        s = 0
        
        for i in arr : 
            s += i
            
            if s == avg : 
                cnt += 1
                s = 0
                
        if cnt >= 3 : return True
        else : return False