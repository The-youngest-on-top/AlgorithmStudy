class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:

        n, r = len(nums), []

        def backtracking(prev_level: List[int], decisions: List[int]) :
            if len(prev_level) == n :
                r.append(list(prev_level))
                return
            for i in range(len(decisions)) :
                prev_level += decisions[i],
                backtracking(prev_level, (decisions[:i] + decisions[(i+1):]))
                prev_level.pop()
                
        backtracking([], nums)
        return r