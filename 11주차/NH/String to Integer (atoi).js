function myAtoi(s) {
    let num = parseInt(s);
     if (num >= 2**31-1){
         return (2**31)-1;
     }
     if (num <= -(2**31)){
         return -(2**31);
     }
     if (isNaN(num)){
         return 0
     }
     return num 
 };