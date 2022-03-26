class Solution:
    def isPalindrome(self, x: int) -> bool:
        List = list(str(x))
        
        if List == List[::-1] : return True
        else : return False