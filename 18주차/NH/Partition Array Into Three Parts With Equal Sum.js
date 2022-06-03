function canThreePartsEqualSum(arr) {
    let sum=arr.reduce((sum,cur)=>sum+cur)/3 ;
    let sample=0;
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(count==2)return true;
        if(i==arr.length-1&&count!=2)return false;
        sample+=arr[i];
        if(sum==sample){
            sample=0;
            count++;
        }
    }
};