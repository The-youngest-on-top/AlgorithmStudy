class Solution:
    def countSegments(self, s: str) -> int:
        arr = list(map(str, s.split()))
        return len(arr)