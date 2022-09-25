function thirdMax(nums) {
    nums.sort((a,b)=>a-b);
    let new_nums = [...new Set(nums)];
    if(new_nums.length<3)return Math.max(...new_nums);
    return new_nums[new_nums.length-3];
};