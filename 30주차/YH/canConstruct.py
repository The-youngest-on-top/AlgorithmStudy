class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        
        mCounts = Counter(magazine)
        rCounts = Counter(ransomNote)
        
        for char in rCounts.keys() :
            if mCounts.get(char, 0) - rCounts[char] < 0 : return False
            
        return True