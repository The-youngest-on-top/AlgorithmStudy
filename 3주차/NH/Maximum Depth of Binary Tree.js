function maxDepth(root) {
    let answer=0;
    let count=1;
    if(root==null)return answer;
    function sample(node,count){
       if(node==null)
         return ;
     
       if(node.left==null&&node.right==null) {
        answer=(answer>count)?answer:count;
        return ;
       }
       sample(node.left,count+1);
       sample(node.right,count+1);
    }
        sample(root,count);
        return answer;
};