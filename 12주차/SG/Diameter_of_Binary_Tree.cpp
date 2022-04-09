#include<bits/stdc++.h>
using namespace std;
// Definition for a binary tree node.
struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution
{
public:
    // 트리의 지름 문제
    // root 에서 가장 먼 지점 찾고
    // 그 지점에서 가장 먼 지점을 찾으면 트리의 지름이다.
    pair<TreeNode *,int> mx = {NULL,0};
    unordered_map<TreeNode *,vector<TreeNode *>> T;
    void init(){
        mx = {NULL,0};
    }
    void mkTree(TreeNode *pre,TreeNode *cur,int len){
        if(cur == NULL) {
            if(mx.second < len-1){
                mx = {pre,len-1};
            }
            return;
        }
        T[cur].push_back(cur->right); 
        T[cur].push_back(cur->left);
        T[cur].push_back(pre);
        mkTree(cur,cur->left,len+1);
        mkTree(cur,cur->right,len+1);
    }
    void getLen(TreeNode *pre,TreeNode * cur,int len){
        if(cur == NULL) {
            if(mx.second < len-1){
                mx = {pre,len-1};
            }
            return;
        }
        for(auto nx : T[cur]){
            if(nx == pre) continue;
            getLen(cur,nx,len+1);
        }
    } 
    int diameterOfBinaryTree(TreeNode *root)
    {
        mkTree(NULL,root,0);
        root =  mx.first;
        init();
        getLen(NULL,root,0);
        return mx.second;
    }
};