function lengthOfLongestSubstring(s) {
    let sample=[];
    let total=[];
    let i=0;
    let j=0;
    let max=0;
    
    if(s.length==1)return 1;
    while(i<s.length){
        if(i==s.length-1)total.push(sample);
        
        if(!sample.includes(s[i])){
            sample.push(s[i]);
            i++;
        }
        
        else if(sample.includes(s[i])){
            total.push(sample);
            sample=[];
             i=j;
             j++;
        }
    }
      
   for(let num of total){
      max=Math.max(max,num.length);
   }
    return max;
};