function reverseOnlyLetters(s) {
    let sample=s.match(/[a-z A-Z]/g)?s.match(/[a-z A-Z]/g):[0];
    sample.reverse();
    s=s.split("");
    let i=0;
    let j=0;
    while(i<s.length){
        if(/[a-zA-Z]/g.test(s[i])){ //정규식으로 구별 
        // 아스키코드로 구별 -> 이게 더 빠름 
        // if((s[i]>=String.fromCharCode(65)&&s[i]<=String.fromCharCode(90))||(s[i]>=String.fromCharCode(97)&&s[i]<=String.fromCharCode(122))){
            s[i]=sample[j];
            i++;
            j++;
        }
        else {
            i++;
        }
    }
    return s.join("");
};
