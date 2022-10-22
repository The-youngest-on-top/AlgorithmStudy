/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
 function countGoodTriplets(arr, a, b, c) {
    let answer = 0
    for(let i = 0; i < arr.length-2; i++){
        for(let j = i+1; j < arr.length-1; j++){
            for(let k = j+1; k < arr.length; k++){
                if(Math.abs(arr[i]-arr[j]) <= a && Math.abs(arr[j]-arr[k]) <= b && Math.abs(arr[k]-arr[i]) <= c){
                    answer++
                } 
            }
        }
    }
    return answer
    
};