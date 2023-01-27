/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
*/

function combine(n, k) {
    let nums = [...new Array(n).keys()].map(x => x+1);
    let result = []

    const helper = (nums, arr, start) => {

        if(arr.length === k){
            result.push([...arr]);
            return;
        }
        
        for(let i = start; i < nums.length; i++){
            arr.push(nums[i])
            helper(nums , arr , i+1);
            arr.pop()
        }
    }

    helper(nums ,[] ,0)
    return result
 
};