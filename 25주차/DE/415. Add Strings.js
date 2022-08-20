/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 function addStrings(num1, num2) {
    let carry = 0
    let answer = ''

    if(num1.length > num2.length){
        let tmp = '0'.repeat(num1.length-num2.length)
        num2 = tmp + num2
    }
    else {
        let tmp = '0'.repeat(num2.length-num1.length)
        num1 = tmp + num1
    }

    for(let i = num1.length-1; i >= 0; i--){
        let num = Number(num1[i]) + Number(num2[i]) + carry
        if(num > 9){
            carry = 1
            num = num - 10
        }
        else carry = 0
        answer = num.toString() + answer
    }
    if(carry != 0) answer = '1'+answer
    return answer
};