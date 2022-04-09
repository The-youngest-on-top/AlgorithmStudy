function fizzBuzz(n) {
    let sample=[];
    for(let i=1; i<=n; i++)sample.push(String(i));
    for(let j=0; j<sample.length; j++){
        if(sample[j]%3==0&&sample[j]%5==0){
            sample[j]="FizzBuzz";
        }
        else if(sample[j]%3==0){
            sample[j]="Fizz";
        }
        else if(sample[j]%5==0){
            sample[j]="Buzz";
        }
    }
  return sample;
};