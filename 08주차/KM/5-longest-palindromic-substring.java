class Solution {
    public String longestPalindrome(String s) {
        String answer = "";
        for(int i = 0; i<s.length(); i++){
            // 길이가 홀수일 경우(가운데를 기준으로 같을때) ex) bab
            String temp = getPalindrome(s,i,i);
            // 길이가 짝수일 경우 ex) bb
            String temp2 = getPalindrome(s,i,i+1);
            temp = (temp.length() < temp2.length())? temp2 : temp;
            answer = (answer.length() < temp.length())? temp : answer;
        }
        return answer;
    }
    
    public String getPalindrome(String s, int start, int end){
        while(start>=0 && end<s.length() && s.charAt(start)==s.charAt(end)){
            start--;
            end++;
        }
        return s.substring(start+1, end);
    }
    
}