/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
function findTheDistanceValue(arr1, arr2, d) {
    let cnt = 0;
    for(let i = 0; i < arr1.length; i++){
        let b = true;
        for(let j = 0; j < arr2.length; j++){
            if(Math.abs(arr1[i]-arr2[j]) <= d){
                b = false;
                break;
            }
        }
        if(b) cnt++;
    }
    return cnt
};
