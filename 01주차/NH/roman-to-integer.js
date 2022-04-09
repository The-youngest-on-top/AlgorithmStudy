function romanToInt(s) {
    let sample=[];
    
    for(let i=0; i<s.length; i++){
        if(s[i]=='I')sample[i]=1;
        if(s[i]=='V')sample[i]=5;
        if(s[i]=='X')sample[i]=10;
        if(s[i]=='L')sample[i]=50;
        if(s[i]=='C')sample[i]=100;
        if(s[i]=='D')sample[i]=500;
        if(s[i]=='M')sample[i]=1000;
    }
    
    for(let i=0; i<sample.length; i++)  
        if(sample[i]<sample[i+1]) sample[i]*=-1; 
    
    return sample.reduce((sum,current)=>sum+current,0)
};