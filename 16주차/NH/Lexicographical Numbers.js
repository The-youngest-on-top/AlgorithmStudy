/**
 * @param {number} n
 * @return {number[]}
 */
//시간복잡도 1 
 function lexicalOrder(n){
    let result=[];
    function sample(start,end){
        while(start<=end&&start<=n){
            result.push(start);
            sample(start*10,start*10+9);
            start++;
    }  
    }
    sample(1,9);
    return result;
}
//map도 시간복잡도는 O(1)이다.
// function lexicalOrder(n) {
//     return sample=[...new Array(n)].map((a,i)=>i+1).sort();
// };