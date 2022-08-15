function findComplement(num) {
    num=num.toString(2);
    let array=[];
    let sum=0;

    for(let i=0; i<num.length; i++){
         if(num[i]=='1')array.push(0);
         else array.push(1);
    }
    let h=1;
    for(let i=array.length-1; i>=0; i--){
       sum+=(h*array[i]);
       h=h*2;
   }
     return sum;
};