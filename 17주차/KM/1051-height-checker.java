class Solution {
    public int heightChecker(int[] heights) {
        int cnt = 0;
        int[] temp = Arrays.copyOf(heights, heights.length);
        Arrays.sort(temp);
        for(int i = 0; i<temp.length; i++){
            System.out.print(temp[i]);
            if(temp[i] != heights[i]) cnt++;
        }
        return cnt;
    }
}