function smallestRangeI(nums, k) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    
    max=max-k;
    min=min+k;
    
    return (max-min)<0? 0:max-min;
};