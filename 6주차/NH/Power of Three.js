function isPowerOfThree(n) {
    if(n==0)
        return false;
    if(n==1)
         return true;
     else    
         return isPowerOfThree(n/3);
 };