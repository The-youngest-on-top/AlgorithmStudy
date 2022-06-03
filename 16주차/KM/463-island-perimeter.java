class Solution {
    public int islandPerimeter(int[][] grid) {
        int answer = 0;
        int[] dx = {1, -1, 0, 0};
        int[] dy = {0, 0, 1, -1};
        for(int i = 0; i<grid.length; i++){
            for(int j = 0; j<grid[i].length; j++){
                if(grid[i][j] == 0) continue;
                int cnt = 0;
                for(int k = 0; k<4; k++){
                    int nx = i + dx[k];
                    int ny = j + dy[k];
                    if(isIn(grid, nx, ny)) continue;
                    if(grid[nx][ny] == 1) cnt++;
                }
                answer += 4 - cnt;
            }
        }
        return answer;
    }
    public boolean isIn(int[][] grid, int x, int y){
        return x < 0 || x >= grid.length || y < 0 || y >= grid[0].length;
    }
}