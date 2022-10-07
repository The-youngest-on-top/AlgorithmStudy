/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 function permute(nums) {
    let answer = []
    let cnt = nums.length
    function permutations(items, arr){
        if(items.length === cnt){
            answer.push(items)
            return
        }
        for(let i = 0; i < arr.length; i++){
            permutations([...items, arr[i]], arr.filter((e, index)=>index!==i))
        }
    }
    permutations([], nums)
    return answer
    
};