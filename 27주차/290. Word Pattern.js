/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 function wordPattern(pattern, s) {
    s = s.split(' ')
    pattern = pattern.split('')
    let dict = {}
    let sset = new Set(s)
    let patternset = new Set(pattern)
    console.log(sset, patternset)
    if(sset.size != patternset.size) return false
    if(s.length != pattern.length) return false
    for(let i = 0; i < pattern.length; i++){
        if(dict[s[i]] == undefined){
            dict[s[i]] = pattern[i]
        }
        else{
            if(dict[s[i]] != pattern[i]) return false
        }
    }
    return true
};