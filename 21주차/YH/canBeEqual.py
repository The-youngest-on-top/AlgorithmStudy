class Solution:
    def canBeEqual(self, target: List[int], arr: List[int]) -> bool:
        
        target.sort()
        arr.sort()
        
        if target == arr : return True
        else : return False