/**
 * @param {number[][]} grid
 * @return {number}
 */
 function islandPerimeter(grid) {
    let count=0;
    let neighbor=0;
    //섬 하나당 4개의 stripe를 가지고 있으니까 4씩 카운트 해준다.
    //이웃 하나당 2개의 stripe를 공유하니까 2씩 카운트 해준다.
    // 그리고 빼준다
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length; j++){
            if(grid[i][j]){
                count+=4;
                if(i<grid.length-1&&grid[i+1][j])neighbor+=2;
                if(j<grid[i].length-1&&grid[i][j+1])neighbor+=2;
            }
        }
    }
   return count-neighbor;
};