function allCellsDistOrder(rows, cols, rCenter, cCenter) {
    let answer=[];
    let bucket=[]
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            let dis=Math.abs(i-rCenter)+Math.abs(j-cCenter);
            if(bucket[dis]===undefined)bucket[dis]=[];
            bucket[dis].push([i,j]);
        }
    }
    for(let buckets of bucket){
         answer.push(...buckets);
    }
    return answer;
};