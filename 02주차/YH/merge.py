class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        
        nums1[:] = sorted(nums1[:m] + nums2[:n])
        
"""
이 방법이 실행이 안되는데 왜 안되는지 이해가 안감
print로 nums1 해보면 값이 정확한데...왜 안될까?
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        
        numsList1 = []
        numsList2 = []
        
        for i in range(m) : 
            numsList1.append(nums1[i])
        
        for i in range(n) : 
            numsList2.append(nums2[i])

        nums1 = sorted(numsList1+numsList2)
        print(nums1)
"""