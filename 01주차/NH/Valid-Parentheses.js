function isValid(s){
    let sample=[];
    for(let num of s){
       
        if((num=='(')||(num=='[')||(num=='{')){
            sample.push(num);
            
        }
        else if(num==')'){
             if(sample.length==0) return false;
             if(sample[sample.length-1]=='(')sample.pop();
                 else return false;
        } 
        else if(num==']'){
              if(sample.length==0) return false;
            if(sample[sample.length-1]=='[')sample.pop();
            else return false;
        }
        else if(num=='}'){
              if(sample.length==0) return false;
             if(sample[sample.length-1]=='{')sample.pop();
                 else return false;
        }
    }
    console.log(sample);
    if(sample.length==0) return true;
    else return false;
};