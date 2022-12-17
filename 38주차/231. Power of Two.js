/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
    if (n < 0) return false;
    
    const array = n.toString(2).match(/1/g);
    
    if (array && array.length ===1) {
        return true;
    }
   
   return false;
};