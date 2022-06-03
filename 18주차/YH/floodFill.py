class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:
        
        h, w = len(image), len(image[0])
        
        visited = set()
		
        def DFS( r, c, src_color, new_color) :
            
            # 색상 변경을 할 수 없는 경우
            # 가로 세로를 초과하는 경우
            # 이미 방문한 경우
            # 기준점의 image[sr][sc]와 값이 다른 경우
            if r < 0 or c < 0 or r >= h or c >= w or (r,c) in visited or image[r][c] != src_color : return
            
            # 예외 값이 아닌 경우는 색상 변경
            image[r][c] = new_color
            
            # 방문한 것 추가
            visited.add( (r,c) )
            
            # 4 방향 모두 검사
            DFS( r-1, c, src_color, new_color )
            DFS( r+1, c, src_color, new_color )
            DFS( r, c-1, src_color, new_color )
            DFS( r, c+1, src_color, new_color )
            
        
        DFS(sr, sc, src_color = image[sr][sc], new_color = newColor)
        
        return image