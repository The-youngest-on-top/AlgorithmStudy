class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        answer = ''
        strs_list = []
        
        for i in range(len(strs)) : 
            strs_list.append(strs[i])
            strs_list.sort(key=len)
            
        for i in range(len(strs_list[0])) :             
            for j in range(1, len(strs_list)) :
                if strs_list[0][i] != strs_list[j][i] : 
                    return strs[0][:i]
                
        
        return answer