/**
 * @param {string} s
 * @return {number}
 */
 function countSegments(s) {
    s=  s.split(" ");

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "") {
            s.splice(i,1);
            i--;
        }
    }
    
    return s.length;
};