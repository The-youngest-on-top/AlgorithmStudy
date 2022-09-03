/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
 function fairCandySwap(aliceSizes, bobSizes) {
 
    let mid = (aliceSizes.reduce((a, b) => a + b) - bobSizes.reduce((a, b) => a + b)) / 2;
    let a = new Set(aliceSizes);
    let b = new Set(bobSizes);
    
    let res1, res2 = 0;
    b.forEach((val) => {
        if (a.has(val + mid)){
            res1 = val + mid;
            res2 = val;
        }    
    })
    return [res1, res2]
};