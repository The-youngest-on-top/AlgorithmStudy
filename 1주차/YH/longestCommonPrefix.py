class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        strs_list = []
        
        if(len(strs) == 0) : return ''
        
        for i in range(len(strs)) : 
            strs_list.append(strs[i])
            strs_list.sort(key=len)
        
        else : 
            for i in range(len(strs_list[0])) :             
                for j in range(1, len(strs_list)) :
                    if strs_list[0][i] != strs_list[j][i] : 
                        return strs[0][:i]
        
            return strs_list[0]