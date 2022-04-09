function searchInsert(nums, target) {
    return binarySearch(nums,target,0,nums.length-1);
};

function binarySearch(array, target,start,end) {
    if (start>end) return start;
    let mid = parseInt((start + end)/2);
    if (array[mid]==target) 
        return mid;
    else if (array[mid]>target) 
        return binarySearch(array,target,start,mid-1);
    else 
        return binarySearch(array,target,mid + 1,end);
};

/*function searchInsert(nums, target) {
    for(let i=0; i<nums.length; i++){
        if(nums[i]>=target){
            return i;
        }
    }
    return nums.length;
};
*/
//시간복잡도 O(n)

