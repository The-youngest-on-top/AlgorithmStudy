function rearrangeArray(nums) {
    let array1=[];
    let array2=[];
    let array=[];
    
    for(let i=0; i<nums.length; i++){
     nums[i]>0?array1.push(nums[i]):array2.push(nums[i]);
    }
    for(let i=0; i<nums.length/2; i++){
        array.push(array1[i]);
        array.push(array2[i]);
    }
    return array;
};