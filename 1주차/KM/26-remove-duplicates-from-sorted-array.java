class Solution {
    public int removeDuplicates(int[] nums) {
        if(nums.length == 0)
            return 0;
        int k = 0;
        int duplicate = nums[0];
        for(int i = 1; i<nums.length; i++){
            if(nums[i] != duplicate){
                nums[++k] = nums[i];
                duplicate = nums[i];
            }
        }
        return k+1;
    }
}