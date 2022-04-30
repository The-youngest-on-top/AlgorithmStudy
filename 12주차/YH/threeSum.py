class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        
        answer = []
        n = len(nums)
        nums = sorted(nums)
        
        for i in range(n-2) :
            if i > 0 and nums[i] == nums[i-1] : continue
                       
            j = i+1
            k = n-1
            newTarget = -nums[i]
            
            while j < k :
                s = nums[j] + nums[k]
                
                if s < newTarget : j += 1
                elif s > newTarget : k -= 1
                else :
                    answer.append([nums[i], nums[j], nums[k]])
                    
                    while j < k and nums[j+1] == nums[j] : j += 1
                    j += 1
                    
                    while k > j and nums[k-1] == nums[k] : k -= 1
                    k -= 1
                    
        return answer