function minimumSum(num) {
    num=String(num);
    num=num.split("").sort((a,b)=>a-b);
    return parseInt(num[0]+num[2])+parseInt(num[1]+num[3]);
};
