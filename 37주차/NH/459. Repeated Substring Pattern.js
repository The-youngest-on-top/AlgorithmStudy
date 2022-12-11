/**
 * @param {string} s
 * @return {boolean}
 */
 function repeatedSubstringPattern(s) {

    if (s.length === 1) {
        return false;
    }

    if ([... new Set(s.split(""))].length === 1) {
        return true;
    }
    
    for (let i = 2; i <= s.length / 2; i++) {
        const standard = s.substring(0, i);
        const array = s.split(standard).join("");

        if (array.length === 0) {
            return true;
        }
    }

    return false;

};