//방법1
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

//방법2
class Solution {
    public int maxSubArray(int[] nums) {
        int max = nums[0]; // 최대값 저장
        int sum = nums[0]; // 지금까지 sum 값
        for(int i = 1; i<nums.length; i++){
            sum = Math.max(sum+nums[i] , nums[i]); //sum + 현재값 과 현재값 중 큰것을 sum에 저장
            max = Math.max(sum,max); // sum이 큰 지 max가 큰 지 비교
        }
        return max;
    }
}
