class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:

        List = []
        
        if len(nums1) > len(nums2) : 
            small = nums2
            big = nums1
        else : 
            small = nums1
            big = nums2
        
        for i in small:
            if i in big:
                List.append(i)
                big.remove(i)
                
        return List