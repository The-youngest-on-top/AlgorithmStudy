class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:

        dic = {}
        for i in arr : 
            try : dic[i] = dic[i] + 1
            except : dic[i] = 1
        return len(dic) == len(set(dic.values()))
