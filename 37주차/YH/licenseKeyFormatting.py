class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        tally, res = 0, ''
        for idx, c in enumerate(reversed(s)) :
            if c != '-' :
                if tally == k :
                    res += '-'
                    tally = 0
                res += c.upper()
                tally += 1
        return res[::-1]