function generateMatrix(n) {
    let c0 = 0;
    let c1 = n-1;
    let r0 = 0;
    let r1 = n-1;
    let i=1;
    let board = new Array(n);
    for(let i=0; i<board.length; i++)board[i]=new Array(n);
    
    while(i<=n*n){
        for(let c=c0; c<=c1; c++){
            board[r0][c]=i;
            i++;
        }
        r0++;
        for(let r=r0; r<=r1; r++){
            board[r][c1]=i;
            i++;
        }
        c1--;
        for(let c=c1; c>=c0; c--){
            board[r1][c]=i;
            i++;
        }
        r1--;
        for(let r=r1; r>=r0; r--){
            board[r][c0]=i;
            i++;
        }
        c0++;
    }
    return board;
};