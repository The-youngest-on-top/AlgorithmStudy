function isBalanced(root,count=1) {
    if(!root)return true;
    
    let left=root.left?isBalanced(root.left,count+1):count;
    let right=root.right?isBalanced(root.right,count+1):count;
    
    if(left==false||right==false) return false;
    
    return Math.abs(left-right)>1?false:Math.max(left,right);
   };