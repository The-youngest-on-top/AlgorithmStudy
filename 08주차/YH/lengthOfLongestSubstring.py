class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        
        # 반복해서 curr을 업데이트 시켜줌
        temp = ""
        curr = temp
        
        for i in s :
            # 포함되지 않으면 추가 시켜줌
            if i not in temp :
                temp += i
                if len(temp) >= len(curr) :
                    curr = temp
            else :
                while len(temp) > 1 and i in temp :
                    temp = temp[1:]
                    
                if i in temp : temp = ""
                
                temp += i
                
                if len(temp) >= len(curr) : curr = temp
                    
        return len(curr)