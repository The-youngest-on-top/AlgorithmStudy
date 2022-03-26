class Solution {
    public boolean isPowerOfThree(int n) {
        while(n > 0){
            if(n == 1) return true;
            if(n%3 != 0) break;
            n /= 3;
        }
        return false;
    }
}