function intersection(nums1, nums2) {
    let answer=[];
    for(let num of nums1){
        if(nums2.includes(num))answer.push(num);
    }
    return [...new Set(answer)];
};