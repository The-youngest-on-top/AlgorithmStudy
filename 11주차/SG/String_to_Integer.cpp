#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
class Solution {
public:
    int Atoi(string str){
        ll result =0; int weight = 1; int start = 0;int pm=0;
        if(str[0] == '-'){
            weight = -1; start++;pm++;
        }
        if(str[0] == '+'){start++;pm++;}
        // 앞에 0제거
        while(str[start] == '0'){
            start++;
        }
        for(int i=start;i<str.size();i++){
            if(!isdigit(str[i])){
                str = str.substr(start,i-start);
                break;
            }
        }
        for(int i=pm;i<str.size();i++){
            if(str[i] <'0' || str[i] >'9') break;
            if(str.size()-start> 15) break;
            result+=pow(10,(str.size()-i-1))*(str[i]-'0');
        }
        result = result*weight;
        if(result < -((ll)1 << 31)) return -((ll)1 << 31);
        if(result > ((ll)1 << 31)-1) return ((ll)1 << 31)-1;
        return result;
    }
    int myAtoi(string s) {
        // 토큰 분리
        vector<string> V;
        string cur;
        int result =0;
        for(auto c : s){
            if(c==' ') {
                if(!cur.empty()){
                    V.push_back(cur);
                    cur.clear();
                }
                continue;
            }
            cur.push_back(c);
        }   
        V.push_back(cur);  
        if(V[0][0] != '+' && V[0][0] !='-' && !isdigit(V[0][0])) return 0; 
         result = Atoi(V[0]);
        if(V[0] == "-"){
            result = -Atoi(V[1]);
        }
        if(V[0] == "+"){
             result = Atoi(V[1]);
        }
        return result;
    }
};