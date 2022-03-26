function missingNumber(nums) {  
    let max=Math.max(...nums);
    let min=Math.min(...nums);
    if(!nums.includes(0))return 0;
    if(nums.length==1&&nums[0]==0)return 1;
    if(nums.length==1&&nums[0]==1)return 0;
    for(let i=min; i<=max; i++){
        if(i==max)return i+1;
        if(nums.includes(i)) continue;
        else return i;
    }
};