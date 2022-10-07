/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
 function numberOfLines(widths, s) {
    let answer = [0, 0]
    let sum = 0
    for(let i = 0; i < s.length; i++){
        let num = widths[s.charCodeAt(i) - 97]
        if(sum + num <= 100){
            sum = sum + num
        }
        else{
            answer[0]++
            sum = num
        }
    }
    answer[0]++
    answer[1] = sum
    return answer
};