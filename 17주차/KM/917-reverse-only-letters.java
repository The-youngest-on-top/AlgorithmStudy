class Solution {
    public String reverseOnlyLetters(String s) {
        int idx1 = 0;
        int idx2 = s.length()-1;
        char[] answer = s.toCharArray();
        while(idx1 < idx2){
            if(!Character.isAlphabetic(answer[idx1])) {
                System.out.println(answer[idx1]);
                idx1++;
                continue;
            }
            if(!Character.isAlphabetic(answer[idx2])){
                System.out.println(answer[idx1]);
                idx2--;
                continue;
            } 
            char temp = answer[idx1];
            answer[idx1] = answer[idx2];
            answer[idx2] = temp;
            idx1++;
            idx2--;
        }
        return String.valueOf(answer);
    }
}