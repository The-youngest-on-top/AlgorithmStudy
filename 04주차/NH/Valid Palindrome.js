function isPalindrome(s) {
    let regex=/[^a-zA-Z0-9]/g;
    let result=s.replace(regex,"").toLowerCase();
    let sample=result.split("").reverse().join("");

    if(result==sample) return true;
    else return false;
};