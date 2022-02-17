function maxProfit(prices) {
    let small=prices[0];
    let max=0;
    for(let i=1; i<prices.length; i++){
        if(small>prices[i]){
            small=prices[i];
        }
        if(small<prices[i]){
            max=(max>prices[i]-small)?max:prices[i]-small;
        }
    }
    return max;
 };