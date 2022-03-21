class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int idx = m+n-1, idx1=m-1, idx2=n-1;
        while(idx1 >= 0 && idx2 >= 0){
            nums1[idx--] = (nums1[idx1] > nums2[idx2])? nums1[idx1--] : nums2[idx2--];
        }
        //(nums1[idx1] > nums2[idx2])로 인해서 nums2 만 남기 때문에 idx2에 대해서 반복문 실행
        while(idx2 >= 0){
            nums1[idx--] = nums2[idx2--];
        }
        
    }
}
