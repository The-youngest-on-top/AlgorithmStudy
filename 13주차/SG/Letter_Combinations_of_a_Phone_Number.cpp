#include <bits/stdc++.h>
using namespace std;
string numS[10] = {" ", " ", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
class Solution
{
public:
    vector<string> letterCombinations(string digits)
    {
        vector<string> answer;
        if(digits.size() == 0) return answer;
        int mx[4] = {0, 0, 0, 0};
        for (int i = 0; i < digits.size(); i++)
        {
            mx[i] = digits[i] - '0';
        }
        for (int a = 0; a < numS[mx[0]].size(); a++)
        {
            for (int b = 0; b < numS[mx[1]].size(); b++)
            {
                for (int c = 0; c < numS[mx[2]].size(); c++)
                {
                    for (int d = 0; d < numS[mx[3]].size(); d++)
                    {
                        string tmp;
                        tmp.push_back(numS[mx[0]][a]);
                        tmp.push_back(numS[mx[1]][b]);
                        tmp.push_back(numS[mx[2]][c]);
                        tmp.push_back(numS[mx[3]][d]);
                        tmp.erase(remove(tmp.begin(),tmp.end(),' '),tmp.end());
                        answer.push_back(tmp);
                    }
                }
            }
        }
        return answer;
    }
};
int main(void)
{
    Solution S;
    S.letterCombinations("23");
}