/**
 * @param {string} digits
 * @return {string[]}
 */


 function letterCombinations(digits) {
    let num = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    if(digits == ''){
        return []
    }
    
    let result = ['']
    
    /*
    while문 ver
    while(digits){
        let digit = num[Number(digits[0])].split("");
        let temp = []
        for(let i = 0; i < result.length; i++){
            for(let j = 0; j < digit.length; j++) {
                temp.push(result[i] + digit[j])
            }
        }
        result = temp;
        
        digits = digits.slice(1, digits.length)
    }
    */
    //for문 ver
    for(let idx = 0; idx < digits.length; idx++){
        let digit = num[Number(digits[idx])].split("");
        let temp = []
        for(let i = 0; i < result.length; i++){
            for(let j = 0; j < digit.length; j++) {
                temp.push(result[i] + digit[j])
            }
        }
        result = temp;
    }
    
    return result;
};