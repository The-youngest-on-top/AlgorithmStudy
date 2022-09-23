/**
 * @param {number} num
 * @return {string}
 */
 function intToRoman(num) {
    let answer = ''
    const roman = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I",
    }
    const intArr = Object.keys(roman).reverse();
    for(let i = 0; i < intArr.length; i++) {
        if(num >= intArr[i]) {
            let count = Math.floor(num / intArr[i]) || 1;
            answer += roman[intArr[i]].repeat(count)
            num  = num - (intArr[i] * count)
        }
    }
    return answer
};