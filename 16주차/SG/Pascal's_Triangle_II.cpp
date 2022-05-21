#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    vector<int> answer;
    int origin =0;
    void dfs(string cur){
        for(char c='0';c<='9';c++){
            int tmp = atoi((cur+c).c_str());
            if(tmp<=origin){
                if(tmp == 0) continue;
                answer.push_back(tmp);
                dfs(cur+c);
            }
        }
    }
    vector<int> lexicalOrder(int n) {
        origin = n;
        dfs("");
        return answer;
    }
};
int main(void){
    Solution S;
    S.lexicalOrder(13);
}