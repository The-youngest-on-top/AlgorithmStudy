#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    vector<string> ans;
    int total;
    void dfs(string str,int l,int r){
        if(l+r >= total*2){
            ans.push_back(str);
            return;
        }
        if(l < total){
            dfs(str+'(',l+1,r);
        }
        if(l > r){
            dfs(str+')',l,r+1);
        }
    }
    vector<string> generateParenthesis(int n) {
        total = n;
        dfs("",0,0);
        return ans;
    }
};
int main(void){
    Solution S;
    S.generateParenthesis(3);
}
