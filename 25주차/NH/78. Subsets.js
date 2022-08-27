function subsets(nums) {
    let sample =[]
    
    const dfs = (first,array) =>{
        sample.push(first);
        for(let i=0; i<array.length; i++){
            dfs([...first,array[i]],array.slice(i+1));
        }
    }
    for(let i=0; i<nums.length; i++){
         dfs([nums[i]],nums.slice(i+1));
    }
    return [[],...sample];
};