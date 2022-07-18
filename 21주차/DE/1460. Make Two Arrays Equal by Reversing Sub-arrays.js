/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
function canBeEqual(target, arr) {
    target.sort((a, b)=>a-b);
    arr.sort((a, b)=> a-b)

    for(let i = 0; i < target.length; i++){
        if(target[i] != arr[i]) return false
    }
    return true
    // return target == arr는 형변환 일어나지 않고 배열 주소 비교해서 false 나옴
    // 하나라도 target == arr.toString()은 형변환 일어나서 문자열로 비교 true 나옴
    // target.toString() == arr.toString() 문자열로 바꾸고 비교하니까 true 나옴
    // 배열 비교할 때 문자열로 바꿔서 비교!
    
};
