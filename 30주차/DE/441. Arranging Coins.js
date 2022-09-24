/**
 * @param {number} n
 * @return {number}
 */
 function arrangeCoins(n) {
    let i = 1;
    while(n >= i){
        n = n - i
        i++
    }
    return i-1
};