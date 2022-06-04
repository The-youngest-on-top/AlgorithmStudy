import java.util.*;
class Solution {
    public class Node {
        int r,c;
        Node(int r, int c){
            this.r = r;
            this.c = c;
        }
    }
    int m,n;
    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        m = image.length;
        n = image[0]. length;
        boolean[][] visited = new boolean[image.length][image[0].length];
        int[] dr = {-1,1,0,0};
        int[] dc = {0,0,-1,1};
        Queue<Node> q = new LinkedList<>();
        q.add(new Node(sr,sc));
        int oldColor = image[sr][sc];
        while(!q.isEmpty()){
            Node cur = q.poll();
            visited[cur.r][cur.c] = true;
            image[cur.r][cur.c] = newColor;
            for(int i = 0; i<4; i++){
                int nr = cur.r + dr[i];
                int nc = cur.c + dc[i];
                if(isIn(nr,nc)) continue;
                if(visited[nr][nc]) continue;
                if(image[nr][nc] != oldColor) continue;
                q.add(new Node(nr,nc));
            }
        }
        return image;
    }
    
    public boolean isIn(int r, int c){
        return r < 0 || r>= m || c<0 || c>=n;
    }
}