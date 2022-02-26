function moveZeroes(nums) {
    let sample=[];
    let count=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]==0) sample.push(i);
    }
    for(let j=0; j<sample.length; j++){
     nums.splice(sample[j]-count,1);
     count++;
    }
    for(let k=0; k<sample.length; k++){
     nums.push(0);
    }
};