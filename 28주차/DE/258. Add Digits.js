/**
 * @param {number} num
 * @return {number}
 */
 function addDigits(num) {
    while(num >= 10){
        let str = num.toString().split('')
        let tmp = 0
        str.forEach((e)=>tmp += Number(e))
        num = tmp
    }
    return num
};