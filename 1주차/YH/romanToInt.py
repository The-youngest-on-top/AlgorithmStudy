class Solution:
    def romanToInt(self, s: str) -> int:
        
        rom_val = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        answer = 0
        
        for i in range(len(s)):
            if i > 0 and rom_val[s[i]] > rom_val[s[i - 1]]:
                answer += rom_val[s[i]] - 2 * rom_val[s[i - 1]]
            else:
                answer += rom_val[s[i]]
        return answer