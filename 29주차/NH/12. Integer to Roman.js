function intToRoman(num) {
    let answer = "";
  
    if(num>=1000){
        for(let i=0; i<Math.floor(num/1000); i++){
            answer+="M";            
        }
        num=num%1000;
    }
   
    if(Math.floor(num/100)==9){
        answer+="CM";
        num=num%100;
    }
    if(Math.floor(num/100)==4){
        answer+="CD";
        num=num%100;
    }
    if(Math.floor(num/500)>=1){
        answer+="D";
        num=num%500;
    }
    if(Math.floor(num/100)>=1){
        for(let i=0; i<Math.floor(num/100); i++){
            answer+="C";
        }
        num=num%100;
    }
    
    if(Math.floor(num/10)==9){
            answer+="XC";
        num=num%10;
    }
    if(Math.floor(num/10)==4){
        answer+="XL";
        num=num%10;
    }
    console.log(answer)
    if(Math.floor(num/50)>=1){
       answer+="L";
        num=num%50;
    }
    if(Math.floor(num/10)>=1){
        for(let i=0; i<Math.floor(num/10); i++){
            answer+="X";
        }
        num=num%10;
    }
    
     if(Math.floor(num/1)==9){
        answer+="IX";
        num=num%1;
    }
    if(Math.floor(num/1)==4){
        answer+="IV";
        num=num%1;
    }
    if(Math.floor(num/5)>=1){
        answer+="V";
        num=num%5;
    }
    if(Math.floor(num/1)>=1){
        for(let i=0; i<Math.floor(num/1); i++){
            answer+="I";
        }
        num=num%1;
    }
    return answer;
};