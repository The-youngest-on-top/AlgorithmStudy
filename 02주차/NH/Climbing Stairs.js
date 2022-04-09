function climbStairs(n) {
    let array=[];
    
    array[1]=1;
    array[2]=2;
    
    /*n번째 계단으로 올라가는 법은 
    1.n-2번째 계단에서 2계단을 오르기
    2.n-1번째 계단에서 1계단을 오르기
    => n번째 계단으로 올라가는 법 = n-2번째 계단으로 오르기 + n-1번째 계단으로 오르기
    */
    for(let i=3; i<=n; i++){
        array[i]=array[i-2]+array[i-1];
    }
    return array[n];
};
