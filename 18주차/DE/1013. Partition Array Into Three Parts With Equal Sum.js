/**
 * @param {number[]} arr
 * @return {boolean}
 */
 function canThreePartsEqualSum(arr) {
    let num = arr.reduce((a, b) => a + b) / 3;
    let cnt = 0;
    let sum = 0;
    
    for (let n of arr) {
        sum += n;
        if (sum == num) {
            cnt++;
            sum = 0;
        }
    }
    
    return cnt >= 3;
};