#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    bool isIsomorphic(string s, string t) {
        unordered_map<char,char> hash1,hash2;
        for(int i=0;i<s.length();i++){
            if(hash1.find(s[i])==hash1.end()){
                if(hash2.find(t[i])==hash2.end())
                    hash1[s[i]]=t[i], hash2[t[i]]=s[i];
                else
                    return false;
            }
            else
                if(hash1[s[i]]!=t[i])
                    return false;
        }
        
        return true;
    }
};