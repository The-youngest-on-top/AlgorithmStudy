#include <bits/stdc++.h>
using namespace std;
#define MAX 300001
class Solution
{
    public:
    // 3개합 완전 탐색 => 8000C3 => 시간 초과
    // 0이 될수 있는 경우는 ++- , --+, -0+,000 4가지
    // 따라서 2개를 찾은후에
    // 다른 부호에 0을 만들수 있는 정수 있는지 찾아보자
    vector<vector<int>> threeSum(vector<int> nums)
    {
        sort(nums.begin(),nums.end());
        set<vector<int>> result;
        vector<int> minus;
        vector<int> plus;
        vector<bool> minusF(MAX, false);
        vector<bool> plusF(MAX, false);
        int zeroN = 0;
        for (auto i : nums)
        {
            if (i < 0)
            {
                minus.push_back(i);
                minusF[-i] = true;
            }
            if (i > 0)
            {
                plus.push_back(i);
                plusF[i] = true;
            }
            if (i == 0)
                zeroN++;
        }
        //--+
        for (int i = 0; i < minus.size(); i++)
        {
            for (int j = i+1; j < minus.size(); j++)
            {
                int num = minus[i] + minus[j];
                if (plusF[-num]){
                    result.insert({minus[i],minus[j],-num});
                }
            }
        }
        //++-
        for (int i = 0; i < plus.size(); i++)
        {
            for (int j = i+1; j < plus.size(); j++)
            {
                int num = plus[i] + plus[j];
                if (minusF[num]){
                    result.insert({plus[i],plus[j],-num});
                }
            }
        }
        // -0+
        if(zeroN >=1){
            for(auto i : plus){
                if(minusF[i]){
                    result.insert({-i,0,i});
                }
            }
        }
        //000
        if(zeroN >=3) result.insert({0,0,0});
        vector<vector<int>> ans(result.begin(),result.end());
        return ans;
    }
};
int main(void)
{
    Solution s;
    s.threeSum({1, 2, 3});
}