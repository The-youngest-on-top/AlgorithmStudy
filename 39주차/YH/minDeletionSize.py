class Solution:
    def minDeletionSize(self, strs: List[str]) -> int:

        count = 0
        row = len(strs)
        col = len(strs[0])

        for j in range(col) :
            for i in range(row - 1) :
                if strs[i][j] > strs[i+1][j] :
                    count += 1
                    break
        return count