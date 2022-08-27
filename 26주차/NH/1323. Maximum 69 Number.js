function maximum69Number(num) {
    let index=String(num).indexOf(6);
    num=String(num).split("");
    num[index]=9;
    return num.join("")
 };