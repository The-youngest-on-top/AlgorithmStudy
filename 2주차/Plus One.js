function plusOne(digits) {
    let number="";
    let answer=[];
    for(let num of digits){
        number+=num;
    }
   console.log(typeof(number));
   number=BigInt(number)+BigInt(1);
   console.log(typeof(number));

   number=String(number);
       console.log(typeof(number));

  
   for(let num of number){
      answer.push(num);
   }

   
   
    return answer;
};