function canPartition(nums) {
    let answer=false;
    nums.sort((a,b)=>b-a);
    let sum = nums.reduce((cur,sum)=>cur+sum);
    if(sum%2==1)return false;
    let target=sum/2;
    if(target<nums[0])return false;
    let sample = new Array(target+1).fill(false);
    sample[0]=true;
    
    for(let num of nums){
        for(let i=target; i>=num; i--){
            if(sample[i-num]){
                sample[i]=true;
                if(sample[target]==true){
                    return true;
                }
            }
        }
    }
    return false;
};