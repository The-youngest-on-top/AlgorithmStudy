class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> answer = new ArrayList<>();
        for(int idx1 = 0; idx1<nums.length-2; idx1++){
            if(idx1 > 0 && nums[idx1] == nums[idx1-1]) continue;
            
            int idx2 = idx1 +1;
            int idx3 = nums.length - 1;
            while(idx2 < idx3){
                int sum = nums[idx1] + nums[idx2] + nums[idx3];
                if(sum == 0){
                    answer.add(Arrays.asList(nums[idx1],nums[idx2], nums[idx3]));
                    while(idx2<idx3 && nums[idx2] == nums[idx2+1]) idx2++;
                    while(idx2<idx3 && nums[idx3] == nums[idx3-1]) idx3--;
                    idx2++;
                    idx3--;
                } else if(sum > 0){
                    idx3--;    
                } else {
                    idx2++;
                }
            }
        }
        return answer;
    }
}