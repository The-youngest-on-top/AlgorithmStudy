class Solution {
    public int maxDepth(TreeNode root) {
        int depth = 0;
        if(root == null) return depth;
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        // BFS를 이용해서 트리 전체를 순회
        while(!q.isEmpty()){
            int step = q.size();
            for(int i = 0; i<step ; i++){
                // 해당 depth에 있는 노드들을 모두 순회
                TreeNode cur = q.poll();
                if(cur.left != null){
                    q.offer(cur.left);
                }
                if(cur.right != null){
                    q.offer(cur.right);
                }  
            }
            depth++;
        }
        return depth;
    }
}
