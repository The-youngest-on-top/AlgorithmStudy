class Solution:
    def fairCandySwap(self, aliceSizes: List[int], bobSizes: List[int]) -> List[int]:
        
        a, diff = set(aliceSizes), (sum(aliceSizes) - sum(bobSizes)) // 2
        
        for b in bobSizes :
            if b + diff in a :
                return [b + diff, b]
