#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string> strs) {
        int idx  =0;
        map<string,vector<string>> M;
        vector<vector<string>> answer;
        vector<vector<int>> result;
        for(int i=0;i<strs.size();i++){
            string cur = strs[i];
            string hash = cur;
            sort(hash.begin(),hash.end());
            M[hash].push_back(cur);
        }
        for(auto cur : M){
            answer.push_back(cur.second);
        }
        return answer;
    }
};