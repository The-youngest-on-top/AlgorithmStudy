function countBits(n) {
    let sample=[];
    let count;
    
    for(let i=0; i<=n; i++){
        let k=i.toString(2);
        count=k.match(/[1]/g);

       if(count==null)
            sample.push(0);
       else sample.push
            (count.length);
    }
    return sample
};