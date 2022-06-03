#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    bool canThreePartsEqualSum(vector<int>& arr) {
        int sum = 0;
        for(auto cur : arr){
            sum+=cur;
        }
        if(sum%3 !=0 ) return false;
        sum/=3;
        int subSum = 0;
        int count = 0;
        for(auto cur: arr){
            subSum+=cur;
            if(subSum  == sum){
                count++;
                subSum = 0;
            }
        }
        if(count >= 3) return true;
        return false;
    }
};