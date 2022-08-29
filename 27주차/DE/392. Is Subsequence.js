/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 function isSubsequence(s, t) {
    let regex = new RegExp('[^'+s+']', 'g')
    let answer = t.replace(regex, '')
    s = s.split('')
    for(let i = 0; i < answer.length; i++){
        if(answer[i] == s[0]) s.shift()
    }
    return s.length ? false : true
};
