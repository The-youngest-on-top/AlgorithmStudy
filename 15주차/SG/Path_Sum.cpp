
//  Definition for a binary tree node.
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
    bool pathSum(TreeNode *cur,int curSum,int targetSum){
        if(cur->left == NULL && cur->right == NULL){  
            if(curSum == targetSum) return true;
            return false;
        }
        curSum += cur->val;
        return pathSum(cur->left,curSum,targetSum) | pathSum(cur->right,curSum,targetSum);
    }
    bool hasPathSum(TreeNode *root, int targetSum)
    {
        if(root == NULL) return false;
        return pathSum(root,0,targetSum);
    }
};