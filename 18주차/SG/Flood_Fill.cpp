#include <bits/stdc++.h>
using namespace std;
int dy[4] = {0,1,0,-1};
int dx[4] = {1,0,-1,0};
class Solution
{
    public:
    vector<vector<int>> floodFill(vector<vector<int>> &image, int sr, int sc, int newColor)
    {
        int startColor = image[sr][sc];
        if(startColor == newColor) return image;
        queue<pair<int,int>> q;
        q.push({sr,sc});
        image[sr][sc] = newColor;
        while(!q.empty()){
            int y = q.front().first;
            int x = q.front().second;
            q.pop();
            for(int i=0;i<4;i++){
                int ny = y+dy[i];
                int nx = x+dx[i];
                if(ny < 0 || ny >= image.size() || nx < 0 || nx >=image[0].size()) continue;
                if(startColor != image[ny][nx]) continue;
                q.push({ny,nx});
                image[ny][nx] = newColor;
            }
        }
        return image;
    }
};