class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        return constructTree(nums, 0, nums.length - 1);
    }
    TreeNode constructTree(int[] nums, int low, int high){
        // 중간 값이 계속 서브트리의 루트 노드가 되도록 재귀함수를 이용해 구성
        if(low > high) return null;
        int mid = low +(high - low) / 2;
        TreeNode m = new TreeNode(nums[mid]);
        m.left = constructTree(nums, low, mid - 1);
        m.right = constructTree(nums, mid + 1, high);
        return m;
    }
}
