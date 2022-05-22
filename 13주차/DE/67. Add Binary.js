/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 function addBinary(a, b) {
    let carry = 0
    let maxLen = 0
    let result = ''
    
    if(a.length > b.length){
        maxLen = a.length
        b = b.padStart(a.length, '0')
    }
    else{
        maxLen = b.length
        a = a.padStart(b.length, '0')
    }
    
    a = a.split("").reverse().join("")
    b = b.split("").reverse().join("")
    
    for(let i = 0; i < maxLen; i++){
        num = (Number(a[i]) + Number(b[i]) + carry) % 2
        
        if(Number(a[i]) + Number(b[i]) + carry > 1){
            carry = 1
            result = result + String(num)
        }
        else{
            carry = 0
            result = result + String(num)
        }
    }
    if(carry == 1){
        result = result + '1'
    }
    result = result.split("").reverse().join("")
    return result;
    
};