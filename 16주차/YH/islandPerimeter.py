class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        
        count = 0
        edges = 0
        
        h, w = len(grid), len(grid[0])
        
        for r in range(h) :
            for c in range(w) :
                
                if grid[r][c] == 1 :
                    count += 1
                    if c < w - 1 and grid[r][c + 1] : edges += 1
                    if r < h - 1 and grid[r + 1][c] : edges += 1

        return 4 * count - 2 * edges