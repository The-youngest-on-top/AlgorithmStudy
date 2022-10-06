class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        t = sum(nums)/2
        P = set([nums[0]])

        for x in nums[1:] :
            for y in list(P) :
                P.add(x+y)
        return t in P