class Solution {
    public int titleToNumber(String columnTitle) {
        int result = 0;
        for(int i = 0; i < columnTitle.length(); i++){
            char ch = columnTitle.charAt(i);
            result += Math.pow(26,columnTitle.length()-i-1)*(ch-'A'+1);
        }
        return result;
    }
}
/*
AA -> 26 * 1 + 1
AB -> 26 * 1+ 2
ZY -> 26 * 26 + 25 
*/
