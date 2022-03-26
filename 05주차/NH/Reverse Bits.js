function reverseBits(n) {
    let str = n.toString(2).padStart(32, '0');
    let strReverse = str.split('').reverse().join('');
    let answer = parseInt(strReverse, 2)
    return answer;
};