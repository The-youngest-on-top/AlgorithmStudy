class Solution {
    public int reverse(int x) {
        long answer = 0;
        while(x != 0){
            answer *= 10;
            answer += x%10;
            x /= 10;
        }
        if(answer >= Integer.MIN_VALUE && answer < Integer.MAX_VALUE)
            return (int)answer;
        return 0;
    }
}