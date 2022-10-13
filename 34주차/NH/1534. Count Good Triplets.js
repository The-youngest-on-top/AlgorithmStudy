function countGoodTriplets(arr, a, b, c) {
    let first=[];
    
    for(let i=0; i<arr.length-2; i++){
        for(let j=i+1; j<arr.length; j++){
            for(let k=j+1; k<arr.length; k++){
                if(Math.abs(arr[i]-arr[j])<=a){
                     if(Math.abs(arr[j]-arr[k])<=b){
                          if(Math.abs(arr[i]-arr[k])<=c){
                              first.push([arr[i],arr[j],arr[k]]);
                          }
                     }
                }
            }     
        }
    }
          
return first.length;
};