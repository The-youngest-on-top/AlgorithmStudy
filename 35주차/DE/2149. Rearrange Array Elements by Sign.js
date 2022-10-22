/**
 * @param {number[]} nums
 * @return {number[]}
 */
 function rearrangeArray(nums) {
    let answer = []
    let positive = []
    let negative = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i]>0) positive.push(nums[i])
        else negative.push(nums[i])
    }
    for(let i = 0; i < positive.length; i++){
        answer.push(positive[i])
        answer.push(negative[i])
    }
    return answer
};