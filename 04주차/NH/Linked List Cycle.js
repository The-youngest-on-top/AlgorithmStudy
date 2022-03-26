function  hasCycle(head) {
    let array=[];
    let bool=-1;
    if(head==null)return false;
    function sample(head){
    if(head.next==null)return false;
    if(array.includes(head)){
        bool=array.indexOf(head);
    }
    else{  
        array.push(head);    
        sample(head.next);}
    }
    sample(head);
    if(bool==-1) return false;
    else return true;
   
};