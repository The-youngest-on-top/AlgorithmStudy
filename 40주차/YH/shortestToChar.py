class Solution:
    def shortestToChar(self, s: str, c: str) -> List[int]:

        myList = [i for i,letter in enumerate(s) if letter == c]
        result = []
        for i in range(len(s)):
            pos = []
            for j in myList:
                pos.append(abs(j-i))
            result.append(min(pos))
        return result