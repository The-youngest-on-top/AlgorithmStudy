function majorityElement(nums) {
    let major=0;
    let major_count=0;
    let count=0;
    if(nums.length==1)return nums[0];  
    nums=nums.sort((a,b)=>a-b);
   
    for(let i=0; i<nums.length; i++){
        if(nums[i]!=nums[i+1]){
            if(count>major_count){
                major_count=count;
                major=nums[i];
                count=0;
            }
        }
        else  count++; 
    }
    return major;
    
   };