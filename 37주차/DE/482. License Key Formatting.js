/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function licenseKeyFormatting(s, k) {
    s = s.split('-').join('').toUpperCase()
    let first = s.length % k
    let result = ''
    if(s.length % k !== 0){
        result += s.slice(0, first)
        result += '-'
    }
    
    for(let i = 0; i < Math.floor(s.length / k); i++){
        result += s.substr(first+i*k, k)
        result += '-'
    }
    return result.slice(0, -1)
};