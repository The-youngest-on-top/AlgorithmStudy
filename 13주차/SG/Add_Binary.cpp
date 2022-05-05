#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    string addBinary(string a, string b) {
        string ans;
        bool up =false;
        if(a.size() < b.size()) swap(a,b);
        reverse(b.begin(),b.end());
        while(b.size() != a.size()) b.push_back('0');
        reverse(b.begin(),b.end());
        for(int i=b.size()-1;i>=0;i--){
            int sub = a[i]-'0' + b[i]-'0' + up;
            char p = '0';
            if(sub/2>=1){
                up = true;
            }
            else{
                up = false;
            }
            p = sub%2+'0';
            ans.push_back(p);
        }
        if(up) ans.push_back('1');
        reverse(ans.begin(),ans.end());
        return ans;
    }
};
int main(void){
    Solution S;
    S.addBinary("11011","100");
}