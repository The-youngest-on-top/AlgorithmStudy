function threeSum(nums) {
    let sample=[];
    nums=nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length; i++){
         if(nums[i]==nums[i-1])continue;
        
         let start=i+1;
         let end=nums.length-1;
         
         while(start<end){
          let target=-nums[i];
          let sum=nums[start]+nums[end];

          if(sum==target){
            sample.push([nums[i],nums[start],nums[end]]);
            while(nums[start]==nums[start+1])start++;
            while(nums[end]==nums[end-1])end--;
            start++;
            end--;
          }
           else if(sum<target)start++;
           else end--;
       }
     }
    return sample; 
};