#include <bits/stdc++.h>
using namespace std;
int dp[50][50];
class Solution
{
public:
    vector<int> getRow(int rowIndex)
    {
        rowIndex++;
        dp[1][1] = 1;
        vector<int> ans;
        for (int i = 2; i <= rowIndex; i++)
        {
            for (int j = 1; j <= i; j++)
            {
                dp[i][j] = dp[i - 1][j - 1] + dp[i-1][j];
            }
        }
        for (int i = 1; i <= rowIndex; i++)
        {
            ans.push_back(dp[rowIndex][i]);
        }
        return ans;
    }
};