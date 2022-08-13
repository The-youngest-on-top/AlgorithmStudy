class Solution:
    def sumOddLengthSubarrays(self, arr: List[int]) -> int:
        
        res = 0
        for i in range(len(arr)) :
            
            s = 0
            
            for j in range(i, len(arr)) :
                s += arr[j]
                
                if (j - i) % 2 == 0 :
                    res += s
                    
        return res