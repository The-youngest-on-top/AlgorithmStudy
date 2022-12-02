/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 function spiralOrder(matrix) {
    let rowstart = 0
    let colstart = 0
    let rowend = matrix.length - 1
    let colend = matrix[0].length - 1
    
    let result = []

    while(rowstart <= rowend && colstart <= colend){
        for(let i = colstart; i <= colend; i++){
            result.push(matrix[rowstart][i])
        }
        rowstart++
        
        for(let i = rowstart; i <= rowend; i++){
            result.push(matrix[i][colend])
        }
        colend--
        
        if(rowstart <= rowend){
            for(let i = colend; i >= colstart; i--){
                result.push(matrix[rowend][i])
            }
        }
        rowend--
        
        if(colstart <= colend){
            for(let i = rowend; i >= rowstart; i--){
                result.push(matrix[i][colstart])
            }
        }
        colstart++
    }
    return result
};