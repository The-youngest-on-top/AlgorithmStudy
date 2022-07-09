/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b)
	let min = Infinity
	for(let i = 0; i < nums.length - 2; i++) {
		let l = i + 1
		let r = nums.length - 1
		while(l < r) {
			let sum = nums[i] + nums[l] + nums[r]
			if(sum == target) return target
			if(Math.abs(target - sum) < Math.abs(target - min)) min = sum
            target < sum ? r-- : l++
        }
	}
	
	return min;
};
