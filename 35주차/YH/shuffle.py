class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:

        a, n = [], len(nums) // 2
        for i in range(n) :
            a.append(nums[i])
            a.append(nums[n+i])
        return a