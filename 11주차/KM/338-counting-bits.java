class Solution {
    public int[] countBits(int n) {
        int[] answer = new int[n+1];
        for(int i = 0 ; i<=n; i++){
            String bit = Integer.toBinaryString(i);
            int cnt = 0;
            for(char c : bit.toCharArray()){
                if(c=='1') cnt++;
            }
            answer[i] = cnt;
        }
        return answer;
    }
}