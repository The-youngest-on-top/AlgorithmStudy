function searchRange(nums, target) {    
    //이진탐색
    let left = 0;
    let right = nums.length-1;
    
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(target<nums[mid]){
            right=mid-1;
        }
        else if(target>nums[mid]){
            left=mid+1;
        }
        else if(target==nums[mid]){
            let low = mid;
            let high = mid;
            while(low>=0&&nums[low]==target){
                low--;
            }
            while(high<nums.length&&nums[high]==target){
                high++;
            }
            return [low+1,high-1];
        }
    }
    return [-1,-1];
};