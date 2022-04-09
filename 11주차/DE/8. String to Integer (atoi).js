function myAtoi(s) {
    num = ""
    for(let i = 0; i < s.length; i++){
        if(!num && isNaN(s[i]) && s[i] != ' ' && s[i] != "-" &&  s[i] != '+'){
            return 0
        }
        else if(num && s[i] == ' '){
            break
        }
        else if(num && isNaN(s[i])){
            break
        }
        else if(s[i] == "-" || s[i] == '+' || (!isNaN(s[i]) && s[i] != ' ')){
            num += s[i];
        }
    }
    num = Number(num)
    if (num >= (2**31)-1){
        return (2**31)-1;
    }
    else if(num <= (-2)**31){
        return (-2)**31
    }
    if(isNaN(num)){
        return 0
    }
    return num
};