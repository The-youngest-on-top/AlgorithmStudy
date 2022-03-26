class Solution {
    public int majorityElement(int[] nums) {
        HashMap<Integer, Integer> hm = new HashMap<>();
        int majority = 0;
        int majority_cnt = 0;
        for(int num : nums){
            if(hm.containsKey(num)){
                int cnt = hm.get(num);
                hm.put(num, cnt + 1);
            } else {
                hm.put(num, 1);
            }
        }
        for(int key: hm.keySet()){
            int value = hm.get(key);
            if(value >= nums.length/2 && value > majority_cnt){
                majority = key;
                majority_cnt = value;
            }  
        }
            
        return majority;
    }
}