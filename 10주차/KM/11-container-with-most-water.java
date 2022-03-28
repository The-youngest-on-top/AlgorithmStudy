class Solution {
    public int maxArea(int[] height) {
        int left = 0;
        int right = height.length-1;
        int max = -1;
        while(left< right){
            int h = Math.min(height[left], height[right]);
            int area = (right - left) * h;
            max = Math.max(max, area);
            if(height[left] > height[right]){
                right = right - 1;
            } else {
                left = left + 1;
            }
        }
        return max;
    }
}