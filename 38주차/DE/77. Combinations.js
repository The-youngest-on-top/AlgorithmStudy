/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
    let elements = new Array(n).fill(0)
    elements.forEach((e, i)=>elements[i] = i+1)

    const getCombinations = (array, selectNumber) => {
        const results = [];
        if(selectNumber === 1){
            return array.map((element) => [element]);
        }
        array.forEach((fixed, index, origin) => {
            const rest = origin.slice(index+1);
            const combinations = getCombinations(rest, selectNumber - 1);
            const attached = combinations.map((combination) => [fixed, ...combination]);
            results.push(...attached);
        });
        return results;
    }   
    return getCombinations(elements, k)
};