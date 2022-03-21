public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        int cnt = 0;
        String num = Integer.toBinaryString(n);
        for(int i = 0; i<num.length(); i++){
            if(num.charAt(i) == '1') cnt++;
        }
        return cnt;
    }
}