function sample(node1,node2){
    if((node1==null)&&(node2==null))return true;
    if((node1==null)&&(node2!=null))return false;
    if((node1!=null)&&(node2==null))return false;
    if(node1.val!=node2.val) return false;
   
    return sample(node1.left,node2.right)&&sample(node1.right,node2.left);
}

function isSymmetric(root) {
return sample(root.left,root.right);
};