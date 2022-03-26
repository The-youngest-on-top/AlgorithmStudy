function containsDuplicate(nums) {
    let nums_count=0;
    let count=0;
    nums=nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length; i++){
      if(nums[i]==nums[i+1])return true;
      if(i==nums.length-1)return false;
    }
  };