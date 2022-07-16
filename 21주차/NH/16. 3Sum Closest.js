function threeSumClosest(nums, target) {
    let sample=Infinity;
    nums.sort((a,b)=>a-b);
    let i=0;
    for(let i=0; i<nums.length; i++){
        let start=i+1;
        let end=nums.length-1;
        while(start<end){
            let tar=nums[i]+nums[start]+nums[end];
            if(Math.abs(target-tar)<Math.abs(target-sample))
                sample=tar;
                (tar<target)?start++:end--;
        }
    }
    return sample;
};