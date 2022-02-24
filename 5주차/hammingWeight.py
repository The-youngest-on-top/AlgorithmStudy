class Solution(object):
    def hammingWeight(self, n):
        """
        :type n: int
        :rtype: int
        """
        
        nStr = str(bin(n))
        
        value = nStr.count('1')
        
        return value