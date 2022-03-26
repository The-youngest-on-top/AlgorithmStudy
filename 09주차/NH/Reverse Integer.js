function reverse(x) {
    let sample=String(x).split("");
    let check=0;
    if(sample[0]=='-'){
     sample.shift();
     check=1;
    }
    sample=sample.reverse();
    sample=sample.join("");
    sample=Number(sample);
    if(check==1)sample=-sample;
    if(sample>2**31||sample<-(2**31))return 0;
    return sample;
};