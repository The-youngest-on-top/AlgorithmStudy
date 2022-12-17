from itertools import combinations

class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:

        data = [i for i in range(1, n+1)]

        result = list(combinations(data, k))
        return result