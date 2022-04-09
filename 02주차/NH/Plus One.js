function plusOne(digits) {

    let number="";
    let answer=[];
    //digits 배열의 배열값들을 문자열에 더해준다.
    for(let num of digits){
        number+=num;
    }
    //덧셈을 위해 number를 BigInt형으로 변환 후 1을 더해준다.
   number=BigInt(number)+BigInt(1);
   //배열로 변환을 위해 number를 문자열로 변환해준다.
   number=String(number);
   
   //문자열을 answer 배열에 푸쉬
   for(let num of number){
      answer.push(num);
   }

   
   
    return answer;
};