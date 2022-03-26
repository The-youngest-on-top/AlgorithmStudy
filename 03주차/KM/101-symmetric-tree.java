class Solution {
    public boolean isSymmetric(TreeNode root) {
        return checkSymmetric(root,root);
    }
    boolean checkSymmetric(TreeNode leftSide,TreeNode rightSide){
        /**
        왼쪽과 오른쪽 서브트리의 노드를 재귀 함수를 이용해 비교
        나올 수 있는 경우의 수 4가지
        1. 양쪽 노드가 모두 null인 경우(아무 문제 없이 끝까지 트리를 순회 헀으므로 true)
        2. 한쪽 노드만 null인 경우(비대칭이므로 false)
        3. 양쪽 노드의 값이 다른 경우(비대칭이므로 false)
        4. 양쪽 노드의 값이 같은 경우(지금까지는 대칭이므로 추가적인 트리 순회 - 재귀 함수를 이용해 왼쪽,오른쪽 자식들을 순회)
         -> 왼쪽과 오른쪽 모두 true일 경우만 대칭이므로 마지막에 return left&&right 추가
        */
        if(leftSide == null && rightSide == null){
            return true;
        }
        if(leftSide == null || rightSide == null){
            return false;
        }
        if(leftSide.val != rightSide.val) {
            return false;
        }
        boolean left = checkSymmetric(leftSide.left, rightSide.right);
        boolean right = checkSymmetric(leftSide.right, rightSide.left);
        return left && right;
    }
}
