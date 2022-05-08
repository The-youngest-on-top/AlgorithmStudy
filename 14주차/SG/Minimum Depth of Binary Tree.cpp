
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
#include <bits/stdc++.h>
using namespace std;
#define MAX 100001
class Solution
{
    public:
    int ShortDepth(TreeNode *cur)
    {
        if (cur == NULL) return MAX;
        // leaf node
        if ((cur->left == NULL) && (cur->right == NULL)) return 1;
        return min(ShortDepth(cur->left), ShortDepth(cur->right)) + 1;
    }
    int minDepth(TreeNode *root)
    {
        int result = ShortDepth(root);
        return result >= MAX ? 0 : result;
    }
};