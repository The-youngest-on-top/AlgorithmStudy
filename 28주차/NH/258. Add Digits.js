 function addDigits(num) {
    while(1){
        if(num<10)return num;
        let sum=0;
        num=String(num).split("");
        num.map((item)=>sum=Number(item)+sum);
        num=sum;
    }
};