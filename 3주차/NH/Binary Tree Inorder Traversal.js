function inorderTraversal(root) {
    let answer=[];
    function sample(node){
        if(node==null){
            return ;
        }    
        else{
            if(node.left){
                sample(node.left);
            }
            answer.push(node.val);
            if(node.right){
                sample(node.right);
            }
        }
    }
    sample(root);
   return answer;
    
};