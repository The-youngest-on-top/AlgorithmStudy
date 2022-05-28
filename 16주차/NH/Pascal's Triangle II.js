/**
 * @param {number} rowIndex
 * @return {number[]}
 */
//1차원 배열로 구현한 파스칼 삼각형
 function getRow(rowIndex) {
    let row = [1];
     
     for(let i = 1 ; i <= rowIndex ; i++) {
         for(let j = i; j > 0; j--) {
            
             if(j === i)
                 row[j] = 1;
             else
                 row[j] = row[j - 1] + row[j];
         }
     }
     return row;
 };
 //2차원 배열로 구현한 파스칼 삼각형 
 function getRow(rowIndex) {
     let n=new Array(rowIndex+1);
     for(let i=0; i<n.length; i++){
         n[i]=new Array(i+1);
     }
     for(let i=0; i<=rowIndex; i++){
         n[i][0]=1;
         n[i][i]=1;
     }
     for(let j=2; j<=rowIndex; j++){
         for(let k=1; k<j; k++){
             n[j][k]=n[j-1][k-1]+n[j-1][k];                 
         }
     } 
     return n[rowIndex]
 };
 