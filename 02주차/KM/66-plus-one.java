import java.util.ArrayList;

class Solution {
    public int[] plusOne(int[] digits) {
        ArrayList<Integer> result = new ArrayList<>();
        int temp = digits[digits.length-1] + 1; //맨 뒤에 +1 한 값
        for(int i = digits.length-1; i>=0; i--){
            if(temp < 10){
                result.add(0,temp); // 10보다 작으면 그냥 list 맨 앞에 add
                if(i!=0)
                    temp = digits[i-1];
            } else{
                result.add(0,0); 
                if(i==0){
                    //마지막 인덱스면 맨앞에 +1
                    result.add(0,1);
                    break;
                }
                // 10보다 크면 앞에 자릿수값에 +1을 해줘야함.
                temp = digits[i-1] + 1;
            }
        }

        return result.stream().mapToInt(i ->i).toArray(); // ArrayList -> int배열로 변환

    }
}
