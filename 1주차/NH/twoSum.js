function twoSum(nums, target) {
    for(let i=0; i<nums.length; i++){
        if(nums.includes(target-nums[i])){
            if(nums.indexOf(target-nums[i])==i)continue;
            return[i,nums.indexOf(target-nums[i])]
        }
    }
  }