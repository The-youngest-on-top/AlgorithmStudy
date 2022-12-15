/**
 * @param {number[]} nums
 * @return {number}
 */
 function findLHS(nums) {
    let max = 0;

    nums = nums.sort((a,b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        const array = [];
        
        for (let j = i; j < nums.length; j++) {
            if (Math.abs(nums[j] - nums[i]) <= 1) {
                array.push(nums[j]);
            }
        }

        if (Math.max(...array) - Math.min(...array) === 0) {
            continue;
        }

        if (array.length !== 1) {
            max = max > array.length? max : array.length;
        }
    }

    return max;
};