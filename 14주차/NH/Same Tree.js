function isSameTree(p, q) {
    function sample(p,q){
        if(!p&&!q)return true;
        if(p&&!q)return false;
        if(!p&&q)return false;
        if(p.val!=q.val)return false;
        return sample(p.left,q.left)&&sample(p.right,q.right);
    }
    return sample(p,q);
};