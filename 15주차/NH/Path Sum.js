function hasPathSum(root, targetSum) {
    let answer=[];
    
    function sample(root,sum){
    if(!root)return false;
     
    let left=root.left?sample(root.left,sum+root.val):sum+root.val;
    let right=root.right?sample(root.right,sum+root.val):sum+root.val;
   
   if((targetSum==left&&typeof(left)=='number'&&!root.right)||(targetSum==right&&typeof(right)=='number'&&!root.left)){
        return true;
    }
    if(((typeof(left)=='boolean')&&(left==true))||((typeof(right)=='boolean')&&(right==true))){   
        return true;
    }
    else return false;
    }
    return sample(root,0)
};