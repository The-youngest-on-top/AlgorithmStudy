function mySqrt(x) {
    if(x==0) return 0;
    if(x==1) return 1;
    /* 
    j를 0에서 1씩 증가시키며 j의 제곱이 
    x보다 커지는 j에서 1을 마이너스 해준다
    */
    for(let j=0; j<x+1; j++){
     if(j*j>x){ 
         return j-1;
     }
    }
};