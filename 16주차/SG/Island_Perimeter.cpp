#include <bits/stdc++.h>
using namespace std;
class Solution
{
    int dx[4] = {1, 0, -1, 0};
    int dy[4] = {0, 1, 0, -1};

public:
    int islandPerimeter(vector<vector<int>> grid)
    {
        int answer = 0;
        for (int y = 0; y < grid.size(); y++)
        {
            for (int x = 0; x < grid[0].size(); x++)
            {
                for (int k = 0; k < 4; k++)
                {
                    if(grid[y][x] == 0) continue;
                    int nx = x + dx[k];
                    int ny = y + dy[k];
                    if (nx < 0 || nx >= grid[0].size() || ny < 0 || ny >= grid.size())
                    {
                        answer++;
                        continue;
                    }
                    if (grid[ny][nx] == 0)
                    {
                        answer++;
                    }
                }
            }
        }
        return answer;
    }
};
