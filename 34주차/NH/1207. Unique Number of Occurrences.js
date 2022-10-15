function uniqueOccurrences(arr) {
    arr.sort((a,b)=>a-b);
    let many=[];
    
    for(let i=0; i<arr.length; i++){
        let cnt=1;
        while(arr[i]==arr[i+1]){
            i++;
            cnt++;
        }
        many.push(cnt);
    }
    many.sort((a,b)=>a-b);
    for(let i=0; i<many.length; i++){
        if(many[i]==many[i+1])
            return false;
    }
    return true;
};