function fib(n) {
    let fibo=new Array(n).fill(0);
    fibo[0]=0;
    fibo[1]=1;
    for(let i=2; i<=n; i++){
        fibo[i]=fibo[i-2]+fibo[i-1];
    }
    return fibo[n];
};