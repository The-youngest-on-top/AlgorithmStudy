function findTheDistanceValue(arr1, arr2, d) {
    let count=arr1.length;
    for(let num of arr1){
        for(let val of arr2){
            if(Math.abs(num-val)<=d){
                count--;
                break;
            }
        }
    }
    return count;
};
