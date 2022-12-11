/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 function licenseKeyFormatting(s, k) {
    let array = [];
    let count = 0;

    for (let i = s.length - 1; i >= 0; i--) {
         if (count === k) {
            array.push('-');
            count = 0;
        }

        if (s[i].match(/[a-zA-Z0-9]/g)) {
            array.push(s[i].toUpperCase());
            count++;
        }
    }

    if (array[array.length - 1] === '-') {
        array.pop();
    }  
    
    array.reverse();
    return array.join("")
};