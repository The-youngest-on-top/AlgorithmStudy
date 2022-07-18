function customSortString(order, s) {
    s=s.split("");
    s=s.sort(function comperator(a,b){
        if(order.indexOf(a)==-1)return 1;
        if(order.indexOf(b)==-1)return -1;
        if(order.indexOf(a)>order.indexOf(b))return 1;
        else if(order.indexOf(a)<order.indexOf(b))return -1;
    })
   return s.join("");
};
