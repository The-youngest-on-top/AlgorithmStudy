/**
 * @param {number} n
 * @return {number[]}
 */
 function sumZero(n) {
    let answer = []
    if(n%2 != 0) answer.push(0)
    for(let i = 1; i <= n/2; i++){
        answer.push(i)
        answer.push(i*-1)
    }
    return answer
};