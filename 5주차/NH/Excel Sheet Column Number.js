function titleToNumber(columnTitle) {
    let answer = 0;
     for (let i = 0; i < columnTitle.length; i++) {
         let val = columnTitle.charCodeAt(i) - 64;
         answer += val * Math.pow(26, columnTitle.length - 1 - i);
     }
     return answer;
 };
 
 
 