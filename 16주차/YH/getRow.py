class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        
        cnt = rowIndex + 1
        
        table = [[0]*cnt for i in range(cnt)]
        
        for i in range(cnt) : 
            table[i][0] = 1
            table[i][i] = 1
        
        for i in range(2, cnt) : 
            for j in range(1, i) : 
                table[i][j] = table[i-1][j-1] + table[i-1][j]
            
        # print(table)
        return(table[rowIndex])