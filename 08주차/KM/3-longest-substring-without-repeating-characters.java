import java.util.HashSet;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashSet<Character> subString = new HashSet<>();
        int first = 0, last = 0;
        int maxLength = 0;
        while(last < s.length()){
            if(!subString.contains(s.charAt(last))){
                subString.add(s.charAt(last));
                last++;
                maxLength = Math.max(subString.size(), maxLength);
            } else {
                subString.remove(s.charAt(first));
                first++;
            }
        }
        return maxLength;
    }
}