function intersect(nums1, nums2) {
    let answer=[];    
    for(let i=0; i<nums1.length; i++){
       for(let j=0; j<nums2.length; j++){
           if(nums1[i]==nums2[j]){
                nums2[j] = null;
                answer.push(nums1[i]);
                break;
           }
       }
    }
    return answer;
};