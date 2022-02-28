class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        
        List = []
        
        for i in range(len(nums) + 1) : 
            List.append(i)
            
        numsSet = set(nums)
        ListSet = set(List)
        
        answer = 0
        
        for i in (ListSet - numsSet) : 
            answer = i
            
        return answer