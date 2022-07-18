/**
 * @param {number} columnNumber
 * @return {string}
 */
 function convertToTitle(columnNumber) {
    let answer = ''
    while(columnNumber){
        answer += String.fromCharCode(((columnNumber - 1) % 26) + 65)
        columnNumber = parseInt((columnNumber - 1) / 26)
    }
    return answer.split('').reverse().join('')
};