/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 function convert(s, numRows) {
    if (numRows == 1|| s.length <= numRows) return s
    let i = 0
    let tmp = []
    let answer = ''
    while (s.length > i) {
        tmp.push(s.substring(i, i + (numRows * 2 - 2)))
        i = i + (numRows * 2 - 2)
    }
    console.log(tmp)
    let row = 0
    let left = 0
    let right = numRows * 2 - 3
    while(right >= left) {
        if (row == 0 || row == numRows - 1) {
            for (let j = 0; j < tmp.length; j++) {
                if (tmp[j][left] != undefined) answer += tmp[j][left]
            }
            left++
        }
        else {
            for (let j = 0; j < tmp.length; j++) {
                if (tmp[j][left] != undefined) answer += tmp[j][left]
                if (tmp[j][right] != undefined) answer += tmp[j][right]
            }
            left++
            right--
        }
        row++

    }
    return answer

};