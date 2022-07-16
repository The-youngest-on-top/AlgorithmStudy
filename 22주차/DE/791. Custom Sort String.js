/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
 function customSortString(order, s) {
    let answer = ''
    for(let i of order){
        while(s.includes(i)){
            answer += i
            s = s.replace(i, '')
        }
    }
    answer += s
    return answer
};