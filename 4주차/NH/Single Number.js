function  singleNumber(nums) {
    let answer=[];
    nums.sort((a,b)=>a-b);
    
    for(let i=0; i<nums.length; i++){
       
        if(answer[answer.length-1]==nums[i]){
            answer.pop();
            continue;
        }
         answer.push(nums[i]);
    }
    return answer;
};