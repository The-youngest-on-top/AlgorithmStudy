/**
 * @param {string} s
 * @return {number}
 */
 function countSegments(s) {
    s = s.trim()
    s = s.replace(/\s+/g, ' ')
    if(s === '') return 0
    if(s === ' ') return 0
    s = s.split(' ')
    return s.length
};