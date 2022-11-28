/**
 * @param {string} command
 * @return {string}
 */
 function interpret(command) {
    let answer = ''
    let tmp = ''
    for(let i = 0; i < command.length; i++){
        tmp+=command[i]
        if(tmp === 'G'){
            answer += 'G'
            tmp = ''
        }
        else if(tmp === '()'){
            answer += 'o'
            tmp = ''
        }
        else if(tmp === '(al)'){
            answer += 'al'
            tmp = ''
        }
    }
    return answer;
};