/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function searchRange(nums, target) {
    let answer = []
    let pos = 0
    while(true){
        let index = nums.indexOf(target, pos)
        if(index===-1) break;
        else answer.push(index)
        pos = index + 1
    }
    if(answer.length === 0) return [-1, -1]
    else return [answer[0], answer[answer.length-1]]
};