class Solution {
    public int maxProfit(int[] prices) {
        int max = 0;
        int[] dp = new int[prices.length]; // i번째 날까지 중 가장 싼 물건의 값 저장
        dp[0] = prices[0];
        for(int i =1; i<prices.length; i++){
            int profit = prices[i] - dp[i-1];
            if(profit > max){
                max = profit;
            }
            dp[i] = (dp[i-1] > prices[i]) ? prices[i] : dp[i-1];
        }
        return max;
    }
}