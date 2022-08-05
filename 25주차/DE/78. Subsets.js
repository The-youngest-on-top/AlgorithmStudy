/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 function subsets(nums) {
    let answer = [[]]
    
    function getCombination(n, arr){
        let result = []
        if(n == 1) return arr.map((el)=>[el])
        
        arr.forEach((e, i)=>{
            let tmp = arr.slice(i+1)
            let comb = getCombination(n-1, tmp)
            let combination = comb.map((c)=>[e, ...c])
            result.push(...combination)
        })
        return result
    }

    for(let i = 0; i < nums.length+1; i++){
        let tmp = getCombination(i, nums)
        tmp.forEach((e)=>answer.push(e))
    }
    return answer
};