class Node {
    TreeNode node;
    boolean visited;
    Node(TreeNode node, boolean visited){
        this.node = node;
        this.visited = visited;
    }
}

class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        Stack<Node> st = new Stack();
        st.push(new Node(root,false));
        List<Integer> result = new ArrayList();
        while(!st.isEmpty()) {
            Node curNode = st.pop();
            if(curNode.node==null) continue;
            if(curNode.visited) result.add(curNode.node.val);
            else {
                st.push(new Node(curNode.node.right, false));
                st.push(new Node(curNode.node, true));
                st.push(new Node(curNode.node.left, false));
            }
        }
        return result;
    }
}
