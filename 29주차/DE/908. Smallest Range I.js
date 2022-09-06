/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 function smallestRangeI(nums, k) {
    nums.sort((a, b)=>a-b)
    if(nums[nums.length-1] - nums[0] > 2*k){
        return nums[nums.length-1] - nums[0] - 2*k
    } 
    else return 0
};