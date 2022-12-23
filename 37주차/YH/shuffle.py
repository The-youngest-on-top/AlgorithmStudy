class Solution:

    def __init__(self, nums: List[int]):
        self.nums = nums

    def reset(self) -> List[int]:
        return self.nums

    def shuffle(self) -> List[int]:
        answer = [i for i in self.nums]
    
        for i in range(len(answer)):
            idx = random.randrange(i,len(answer))
            answer[i], answer[idx] = answer[idx], answer[i]
            
        return answer


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()