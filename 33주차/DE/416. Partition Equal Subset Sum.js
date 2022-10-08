/**
 * @param {number[]} nums
 * @return {boolean}
 */
 function canPartition(nums) {
    let sum = nums.reduce((a, b)=> a+b)
    if(sum % 2 != 0) return false;
    let dp = new Array(sum/2 + 1).fill(false);
    dp[0] = true;
    for(let num of nums){
        for(let i = sum/2; i>= num; i--){
            if(dp[i-num]) dp[i] = true;
        }
    }
    return dp[sum/2];
};