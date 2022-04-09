class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        
        c = nums.count(val)
        
        while c : 
            nums.remove(val)
            c -= 1