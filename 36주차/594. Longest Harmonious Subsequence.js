/**
 * @param {number[]} nums
 * @return {number}
 */
 function findLHS(nums) {
    let max = 0
    
    let hashmap = {}
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in hashmap){
            hashmap[nums[i]] += 1
        }
        else{
            hashmap[nums[i]] = 1
        }
    }
    let keys = Object.keys(hashmap)
    keys.map((e, i)=>keys[i] = Number(e))
    for(let i = 0; i < keys.length; i++){
        let sum = 0
        if(keys[i]+1 in hashmap){
            sum = (hashmap[keys[i]]+hashmap[keys[i]+1])
        }
        max = Math.max(sum, max)
    }
    return max
};