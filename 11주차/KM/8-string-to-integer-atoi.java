class Solution {
    public int myAtoi(String s) {
        boolean isPositive = true;
        int result = 0;
        int i = 0;
        int len = s.length();
        // 공백 건너뛰기
        while(i < len && s.charAt(i) == ' ') {
            i++;
        }
        // 부호 결정
        if(i < len && s.charAt(i) == '+'){
            i++;
        } else if(i < len && s.charAt(i) == '-'){
            isPositive = false;
            i++;
        }
        
        // 숫자 변환
        while(i<len && Character.isDigit(s.charAt(i))){
            int num = s.charAt(i) - '0';
            if(result > Integer.MAX_VALUE / 10 ||
                (result == Integer.MAX_VALUE / 10 && Integer.MAX_VALUE % 10 < num)){
                // 오버플로우 검사
                return (isPositive) ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }
            result = (result * 10) + num;
            i++;
        }
        return (isPositive) ? result : result*(-1);
        
        
    }
}