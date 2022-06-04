class Solution {
    public boolean canThreePartsEqualSum(int[] arr) {
        int target = 0;
        for(int a : arr){
            target += a;
        }
        if(target%3 != 0) return false;
        target = target / 3;
        int sum = 0;
        int flag = 3;
        for(int i = 0; i<arr.length; i++){
            sum += arr[i];
            if(sum == target){
                sum = 0;
                flag--;
            }
        }
        return (flag<=0) ? true : false;
    }
    
}