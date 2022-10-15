function sumZero(n) {
    let answer=[];
    if(n%2==1){
        answer.push(0);
        let news = 1;
        for(let i=0; i<(n-1)/2; i++){
            answer.push(news);
            answer.push(-news);
            news++;
        }
    }
    else{
        let news = 1;
        for(let i=0; i<(n-1)/2; i++){
            answer.push(news);
            answer.push(-news);
            news++;
        }
    }
    return answer;
};