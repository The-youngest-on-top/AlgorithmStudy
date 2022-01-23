class Solution {
    public int maxSubArray(int[] nums) {
        int[] dp = nums; // dp = 해당 인덱스에서 가장 큰 값을 저장하는 배열
        dp[0] = nums[0];
        int max = dp[0]; // sum의 최댓값 저장
        for(int i = 1; i<nums.length; i++){
            if(dp[i] < dp[i-1] + nums[i]){
                // 현재 값보다 i-1번째 최대값 + 현재 인덱스 값이 클 경우
                dp[i] = dp[i-1] + nums[i];
            }
            if(max < dp[i])
                    max = dp[i];
        }
        return max;
    }
}
