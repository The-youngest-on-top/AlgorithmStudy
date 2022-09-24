/**
 * @param {number[]} nums
 * @return {number}
 */
 function thirdMax(nums) {
    nums = new Set(nums)
    nums = [...nums]
    console.log(nums)
    if(nums.length < 3) return Math.max(...nums)
    nums.sort((a, b)=>b-a)
    return nums[2]
};