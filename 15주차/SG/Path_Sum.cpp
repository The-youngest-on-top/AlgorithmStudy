class Solution
{
public:
    bool pathSum(TreeNode *cur,int curSum,int targetSum){
        if(cur == NULL) return false;
        curSum += cur->val;
        if(cur->left == NULL && cur->right == NULL){  
            if(curSum == targetSum) return true;
            return false;
        }
        return pathSum(cur->left,curSum,targetSum) | pathSum(cur->right,curSum,targetSum);
    }
    bool hasPathSum(TreeNode *root, int targetSum)
    {
        if(root == NULL) return false;
        return pathSum(root,0,targetSum);
    }
};