/**
 * @param {string} s
 * @return {boolean}
 */
function repeatedSubstringPattern(s) {
    if(s.length === 1) return false

    let n = 1
    while(n <= s.length/2){
        if(s.substr(0, n).repeat(s.length/n) === s) return true
        n++
    }
    return false
};