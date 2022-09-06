function fairCandySwap(aliceSizes, bobSizes) {
    let sumA = aliceSizes.reduce((cur,sum)=>sum+cur);
    let sumB = bobSizes.reduce((cur,sum)=>sum+cur);
    let average = (sumA+sumB)/2;
    
    for(let i=0; i<aliceSizes.length; i++){
        for(let j=0; j<bobSizes.length; j++){
            if(sumA-aliceSizes[i]+bobSizes[j]==sumB-bobSizes[j]+aliceSizes[i]){
                return [aliceSizes[i],bobSizes[j]];
            }
        }
    }
};