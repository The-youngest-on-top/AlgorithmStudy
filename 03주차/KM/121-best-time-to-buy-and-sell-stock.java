class Solution {
    public int maxProfit(int[] prices) {
        int max = 0;
        int[] dp = new int[prices.length]; // i번째 날까지 중 가장 싼 물건의 값 저장
        dp[0] = prices[0];
        for(int i =1; i<prices.length; i++){
            int profit = prices[i] - dp[i-1]; // 지금까지 가장 싼 물건의 값을 저장하고 오늘 팔았을 때 나올수 있는 이윤을 계산
            if(profit > max){
                // 오늘 이윤이 max보다 크다면 max를 저장
                max = profit;
            }
            dp[i] = (dp[i-1] > prices[i]) ? prices[i] : dp[i-1]; // 오늘 가격이 더 작다면 지금까지 중 가장 낮은 가격이므로 dp[i]에 저장
        }
        return max;
    }
}
