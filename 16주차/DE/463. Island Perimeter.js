/**
 * @param {number[][]} grid
 * @return {number}
 */
 function islandPerimeter(grid) {
    for(let i = 0; i < grid.length; i++){
        grid[i].unshift(0)
        grid[i].push(0)
    }
    grid.unshift(Array(grid[0].length).fill(0))
    grid.push(Array(grid[0].length).fill(0))
    
    let dir = [[-1, 0], [0, -1], [1, 0], [0, 1]]
    let cnt = 0
    for(let i = 1; i < grid.length - 1; i++){
        for(let j = 1; j <grid[0].length - 1; j++){
            if(grid[i][j] == 1){
                for(let d of dir){
                    if(grid[i+d[0]][j+d[1]] == 0){
                        cnt++
                    }
                }
            }
        }
    }
    return cnt
};