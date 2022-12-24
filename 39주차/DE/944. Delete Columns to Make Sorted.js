/**
 * @param {string[]} strs
 * @return {number}
 */
function minDeletionSize(strs) {
    let result = 0
    for(let i = 0; i < strs[0].length; i++){
        let str = ''
        for(let j = 0; j < strs.length; j++){
            str += strs[j][i]
        }
        if(str !== str.split('').sort().join('')){
            result++
        }
    }
    return result
};