#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    string convertToTitle(int n) {
       string ans = "";
       while(n> 0)
       {
           n--;
           char letter = n % 26 + 'A';
           ans += letter;
           n /= 26;
       }
       reverse(ans.begin(), ans.end());
       return ans;
    }
};