/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 function spiralOrder(matrix) {
    const result = [];

    const moveRight = () => {

        for (let i = 0; i < matrix[0].length; i++) {
            result.push(matrix[0][i]);
        }    

        matrix.splice(0,1);
        return check();
    }

    const moveDown = () => {

        for (let i = 0; i < matrix.length; i++) {
            result.push(matrix[i].pop());
            
            if (matrix[i].length === 0) {
                matrix.splice(i,1);
                i--;
            }
        }
        return check();
    }

    const moveLeft = () => {
        if (matrix.length == 0) return;

        for (let i = matrix[0].length -1 ; i >= 0; i--) {
            result.push(matrix[matrix.length - 1][i]);
        }

        matrix.pop();
        
        return check();
    }

    const moveUp = () => {

        for (let i = matrix.length - 1; i >= 0; i--) {

            if (matrix[i][0]) {
                result.push(matrix[i][0]);
            }

            matrix[i].splice(0, 1);

            if (matrix[i].length === 0) {
                matrix.splice(i,1);
            }
        }
       
        return check();
    }

    const check = () => {
        if (matrix.length === 0) {
            return ;
        }
    }

    const repeat = () => {
        moveRight();
        moveDown();
        moveLeft();
        moveUp();

        if (matrix[0] === undefined) {
            return ;
        } else {
           repeat();
        }
    }
    
    repeat();

    return result;

};