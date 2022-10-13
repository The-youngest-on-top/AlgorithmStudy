function search(nums, target) {
    let left=0;
    let right=nums.length-1;
    let mid=0;
    
    while(left<=right){
        mid=Math.floor((right+left)/2);
        if(nums[mid]>target){
            right=mid-1;
        }
        else if(nums[mid]==target){
            return mid;
        }
        else{
            left=mid+1;
        }
    }
    return -1;
};

