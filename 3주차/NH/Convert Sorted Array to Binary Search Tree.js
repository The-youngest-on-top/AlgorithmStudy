function  sortedArrayToBST(nums) {
    function sample(nums, start, end){
   if (end < start) {
     return null
   }
   let mid = Math.floor((start + end) / 2)
   let node = new TreeNode(nums[mid])

   node.left = sample(nums, start, mid - 1)
   node.right = sample(nums, mid + 1, end)

   return node
 }

 return sample(nums, 0, nums.length - 1)
}
