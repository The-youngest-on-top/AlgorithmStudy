function interpret(command){
    let answer=[];
    
    for(let i=0; i<command.length; i++){
        if(command[i]=='G')answer.push("G");
        if(command[i]=='('&&command[i+1]==')')answer.push("o");
        if(command[i]=='('&&command[i+1]=='a')answer.push("al");
    }
    return answer.join("");
};