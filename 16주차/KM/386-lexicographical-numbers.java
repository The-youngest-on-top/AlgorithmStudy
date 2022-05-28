class Solution {
    List<Integer> answer = new ArrayList<>();
    public List<Integer> lexicalOrder(int n) {
        for(int i = 1; i<=9; i++){
            dfs(i, n);
        }
        return answer; 
    }
    public void dfs(int num, int n){
        if(num > n){
            return;
        }
        answer.add(num);
        for(int i = 0; i<=9; i++){
            dfs(num*10 + i, n);
        }
    }
}