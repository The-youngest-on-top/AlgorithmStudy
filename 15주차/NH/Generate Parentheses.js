function generateParenthesis(n) {
    let res = [];
    function sample(str,left,right){
        if(!left&&!right){
         res.push(str);
         return ;
        }
        if(right<left)return ;
        if(left>0)sample(str+'(',left-1,right);
        if(right>0)sample(str+')',left,right-1);
    }
    sample('(',n-1,n);
    return res;
};