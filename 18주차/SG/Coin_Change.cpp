#include<bits/stdc++.h>
using namespace std;
#define MAX 10001
class Solution {
public:
    int coinChange(vector<int> coins, int amount) {
        vector<int> dp(MAX,99999);
        sort(coins.begin(),coins.end());
        dp[0] = 0;
        for(int i=1;i<=amount;i++){
            for(auto coin : coins){
                if(i-coin < 0) continue;
                dp[i] = min(dp[i-coin]+1,dp[i]);
            }
        }
        if(dp[amount] == 99999) return -1;
        return dp[amount];
    }
};