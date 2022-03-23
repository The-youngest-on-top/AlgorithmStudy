 function maxArea(height) {
    let max=0;
    let i=0;
    let j=height.length-1;
    while(i<j) {
       let area=Math.min(height[i], height[j])*(j-i);
       max=Math.max(max,area);
       if(height[i]<=height[j])
           i++;
       else 
           j--;
    }
    return max;
};
/*
function maxArea(height) {
  let max=0;
       for(let i=0; i<height.length; i++){
           for(let j=0; j<height.length; j++){
               if(i==j)continue;
                let row=Math.abs(i-j);
                let col=height[i]>height[j]?height[j]:height[i];
                max=Math.max(row*col,max);
           }
       }
    return max;
};
*/
//시간초과..