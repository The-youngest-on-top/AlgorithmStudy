class Solution {
    public int singleNumber(int[] nums) {
        ArrayList<Integer> result = new ArrayList<>();
        for(int num : nums){
            if(result.contains(num)){ 
                // 이미 가지고 있으면 제거
                int idx = result.indexOf(num);
                result.remove(idx);
            } else {
                // 없으면 추가
                result.add(num);
            }
        }
        // 마지막까지 제거되지 않은 수를 반환
        return result.get(0);
    }
}
