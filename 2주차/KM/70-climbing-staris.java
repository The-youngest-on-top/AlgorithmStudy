class Solution {
    
    public int climbStairs(int n) {
        if(n<=2) return n;
        int[] step = new int[n+1];
        step[1] = 1; // 첫번째 계단은 방법 1개
        step[2] = 2; // 두번째 계단은 방법 2개
        for(int i = 3; i<=n; i++){
            // i번째 계단을 밟기 위해서는 i-1번째와 i-2번째 계단에서 와야한다.
            step[i] = step[i-1]+step[i-2];
        }
        return step[n];
    }
}
