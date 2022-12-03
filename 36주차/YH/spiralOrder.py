#나는 못 풀겠다..ㅜ

class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        m, n = len(matrix), len(matrix[0])
        rmin, rmax = 0, m - 1
        cmin, cmax = 0, n - 1
        r, c = 0, 0
        dr, dc = 0, 1
        result = []
        
        for _ in range(n * m) :
            result.append(matrix[r][c])
            
            if c + dc > cmax :
                dr, dc = 1, 0
                rmin += 1
            elif r + dr > rmax :
                dr, dc = 0, -1
                cmax -= 1
            elif c + dc < cmin :
                dr, dc = -1, 0
                rmax -= 1
            elif r + dr < rmin :
                dr, dc = 0, 1
                cmin += 1            
            
            r, c = r + dr, c + dc
            
        return result