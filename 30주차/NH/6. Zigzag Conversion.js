function convert(s, numRows) {
    let j=0;
    let answer=[];
    if(numRows==1)return s;
    let array = new Array(s.length);
    for(let i=0; i<array.length; i++)
        array[i]=new Array(numRows).fill(0);
    
    let row=0;
    let col=0;

    while(j<s.length){
       if(j%(2*(numRows-1))==0){
            while(col<numRows-1){
                array[row][col]=s[j];
                j++;
                col++;
            }
          }
        else{
            array[row][col]=s[j];
            row++;
            col--;
            j++;
        }
       }
    for(let i=0; i<numRows; i++){
        for(let k=0; k<array.length; k++){
            if(array[k][i])answer.push(array[k][i]);
        }
    }
    return answer.join("");
};