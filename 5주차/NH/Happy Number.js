 function isHappy(n) {
    let visited=[];
    function sample(n){
        if(n==1) 
            return true;
        n=n.toString().split('');
        n=n.map((a)=>a**2);
        n=n.reduce((sum,cur)=>sum+cur);
        if(visited.includes(n))
            return false;
        visited.push(n);
        return sample(n);
    }
    return sample(n);
};