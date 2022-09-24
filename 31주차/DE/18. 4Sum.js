/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 function fourSum(nums, target) {
    nums.sort((a, b) => a - b); // O(n)
   
   const result = [];
   
   for (let i = 0; i < nums.length; i++){ // O(n)
       if (i > 0 && nums[i] === nums[i - 1]){
           continue;
       }
       
       const initialJ = i + 1;
       
       for (let j = initialJ; j < nums.length - 2; j++){ // O(n)
           if (j > initialJ && nums[j] === nums[j - 1]){
               continue;
           }
           
           let left = j + 1, right = nums.length - 1;
                                   
           while (left < right) { // O(n)
               const currentSum = nums[i] + nums[j] + nums[left] + nums[right];
               
               if (currentSum > target) {
                   right -= 1;
               } else if(currentSum < target) {
                   left += 1
               } else {
                   result.push([nums[i], nums[j], nums[left], nums[right]]);
                   
                   left += 1;
                   right -= 1;
                   
                   while (left < right && nums[left] === nums[left - 1]){
                       left += 1;
                   }
                   
                   while (left < right && nums[right] === nums[right + 1]){
                       right -= 1;
                   }
               }
           }
       }
   }
   
   return result;
};