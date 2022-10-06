class Solution:
    def sumZero(self, n: int) -> List[int]:

        ans = []
        ans.extend([x for x in range(1, n // 2 + 1)])
        ans.extend([-x for x in range(1, n // 2 + 1)])

        if len(ans) != n : ans.append(0)
        return ans