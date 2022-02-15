function generate(numRows) {
    let sample = new Array(numRows);
    let answer=[];
     
     for (var i = 0; i < sample.length; i++) {
         sample[i] = new Array(numRows);
     }
     sample[0]=[1];
     
     for(let j=1; j<numRows; j++){
         for(let i=0; i<=j; i++){
             if(i==0||i==j){
               sample[j][i]=1;  
             }
             else{
                 sample[j][i]=1;
                 sample[j][i]=sample[j-1][i-1]+sample[j-1][i];
             }
         }
     }
    for(let i=0; i<sample.length; i++){
        sample[i].splice(i+1,sample[i].length);
    }
    return sample;
 };
 
 