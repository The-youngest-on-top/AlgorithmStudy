class Solution:
    def numberOfLines(self, widths: List[int], s: str) -> List[int]:

        result = [1, 0]
        for c in s :
            w = widths[ord(c) - ord('a')]
            if result[1] + w <= 100 : result[1] += w
            else :
                result[0] += 1
                result[1] = w
        return result