class Solution:
    def rearrangeArray(self, nums: List[int]) -> List[int]:
        l1=[0]*len(nums)
        a=1
        b=0
        for i in nums :
            if "-" in str(i) :
                l1[a] = i
                a += 2
            else :
                l1[b] = i
                b += 2
        
        return(l1)