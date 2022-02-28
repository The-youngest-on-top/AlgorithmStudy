class Solution {
    //==방법 1==//
    // public void moveZeroes(int[] nums) {
    //     int start = 0;
    //     int end = nums.length;
    //     while(start<nums.length){
    //       for(int i = 0; i<end; i++){
    //         if(nums[i] == 0){
    //             if(i+1 == nums.length) break;
    //             if(nums[i+1] != 0){
    //                 int next = nums[i+1];
    //                 nums[i+1] = 0;
    //                 nums[i] = next;
    //                 }
    //             }
    //         }  
    //         start++; // 위 과정을 거치면 앞쪽에 있는 0이 뒤로 갔을 것이므로 start에 1을 더해준다.
    //         end--;  // 위 과정을 거치면 하나의 0이 끝으로 갔을 것이므로 end를 1 빼준다.
    //     }
    // }
    //==방법 2==//
    public void moveZeroes(int[] nums) {
        int cnt = 0; // 0이 아닌 인덱스의 숫자를 센다.
        for(int i = 0; i<nums.length; i++){
            if(nums[i] != 0){
                nums[cnt] = nums[i];
                cnt++;
            }
        }
        // cnt 인덱스부터 0으로 메꿔준다.
        for(int i = cnt; i<nums.length; i++){
            nums[i] = 0;
        }
    }
}