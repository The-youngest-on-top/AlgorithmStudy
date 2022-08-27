/**
 * @param {number} num
 * @return {number}
 */
 function findComplement(num) {
    num = num.toString(2).split('')
    num.forEach((e, index)=>{
        if(e == '0') num[index] = '1'
        else num[index] = '0'
    })
    return parseInt(num.join(''), 2)
};