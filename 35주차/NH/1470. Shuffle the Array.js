function shuffle(nums, n) {
    let answer=[];
    for(let i=0; i<n; i++){
        answer.push(nums[i]);
        answer.push(nums[n+i]);
    }
    return answer;
};