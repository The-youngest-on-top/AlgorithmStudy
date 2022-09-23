function arrangeCoins(n) {
    let cycle=1;
    let total=n
    for(let i=1; i<=total; i++){
        n=n-i;
        cycle++;
        if(n==0)return cycle-1;
        else if(n<0)return cycle-2;
    }
};