function change(amount, coins) {
    let sample=new Array(amount+1).fill(0);
    sample[0]=1;
    for(let coin of coins){
        for(let i=coin; i<=amount; i++){
            sample[i]+=sample[i-coin];
        }
    }
    return sample[amount];
};