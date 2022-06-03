 function heightChecker(heights) {
    let sample=heights.slice(); //배열 복사 
    let count=0;
    sample.sort((a,b)=>a-b);
    for(let i=0; i<heights.length; i++)
        if(heights[i]!=sample[i])count++;
    return count;
};