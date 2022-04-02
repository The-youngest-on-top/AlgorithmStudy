#include<bits/stdc++.h>
using namespace std;
#define MAX 100001
class Solution {
public:
    // dp풀이
    int dp[MAX];
    vector<int> countBits(int n) {
        vector<int> dp(n+1,0);
        for(int i=1;i<=n;i++){
            int tmp = 1 << (int)log2(i);
            dp[i] = dp[i-tmp]+1;
        }
        return dp;
    }
};