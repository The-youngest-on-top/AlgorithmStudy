/**
 * @param {number[]} arr
 * @return {boolean}
 */
 function uniqueOccurrences(arr) {
    let dict = {}
    let answer = true
    arr.forEach((e)=>{
        if(e in dict){
            dict[e] += 1
        }
        else{
            dict[e] = 1
        }
    })
    let values = Object.values(dict)
    let arr2 = new Array(Math.max(...values)+1).fill(false)
    values.forEach((e)=>{
        if(!arr2[e]) arr2[e] = true;
        else answer = false;
    })
    return answer
};