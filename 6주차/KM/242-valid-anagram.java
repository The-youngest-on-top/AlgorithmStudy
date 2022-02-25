class Solution {
    public boolean isAnagram(String s, String t) {
        int[] count = new int[26];
        //s의 알파벳 Count
        for(char c : s.toCharArray()){
            count[c-'a']++;
        }
        //t의 알파벳 Count
        for(char c : t.toCharArray()){
            count[c-'a']--;
            if(count[c-'a']<0) return false;
        }
        for(int num : count){
            if(num > 0) return false;
        }
        return true;
    }
}