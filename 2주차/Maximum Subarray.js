function maxSubArray(nums) {
   
    let sum=0; //연속된 숫자의 합
    let max=nums[0]; //연속된 숫자의 합중 가장 큰 값
    
    for(let i=0; i<nums.length; i++){
        //연속된 숫자의 합과 현재 배열의 인덱스의 해당하는 값이 0보다 작으면
        if(sum+nums[i]<0){ 
            sum=0; //배열 인덱스의 값이 더 크므로 합의 초기화 한다.
              if(max<nums[i]){ //합의 최대값이 배열 인덱스 값보다 작을경우
                max=nums[i]; //최대값을 인덱스의 해당하는 값으로 할당
            }     
        }
        //연속된 숫자의 합과 현재 배열의 인덱스에 해당하는 값이 0보다 크거나 같을 경우
        if(sum+nums[i]>=0){
            sum+=nums[i]; //합에 현재 배열의 인덱스 값을 더한다.
            if(max<sum){ //최댓값보다 합이 크다면
                max=sum; //최대값에 합을 할당
            }            
        }
    }
   return max;
};

