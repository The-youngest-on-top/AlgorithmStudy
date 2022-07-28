function tribonacci(n) {
    let fibo = new Array(n);
    fibo[0]=0;
    fibo[1]=1;
    fibo[2]=1;
    for(let i=3; i<=n; i++){
          fibo[i]=fibo[i-3]+fibo[i-2]+fibo[i-1];
    }
    return fibo[n];
};