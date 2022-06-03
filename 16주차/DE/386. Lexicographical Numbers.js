/**
 * @param {number} n
 * @return {number[]}
 */
 function lexicalOrder(n) {
    result = [...Array(n).keys()].map((a)=>a+1)
    return result.sort()
};