function sumOddLengthSubarrays(arr) {
    let array = [];
    let sum=0;
    for(let i=0; i<arr.length; i++){
        let sample = [];
        for(let j=1; j<=arr.length; j+=2){
            if(i+j>arr.length)break;
            if(arr.slice(i,i+j).length%2==1)
            sample.push(arr.slice(i,i+j));
        }
        array.push(...sample)
    }
    for(let num of array){
        for(let nums of num){
            sum+=nums;
        }
    }
   return sum;
};