/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 function getRow(rowIndex) {
    let pascal = []
    for(let i = 1; i <= rowIndex + 1; i++){
        pascal.push([...Array(i).fill(1)])
    }
    console.log(pascal)
    for(let i = 1; i < pascal.length - 1; i++){
        for(let j = 0; j < pascal[i].length - 1; j++){
            pascal[i+1][j+1] = pascal[i][j] + pascal[i][j+1]
        }
    }
    return pascal[pascal.length-1]
};