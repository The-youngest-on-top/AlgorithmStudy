class Solution {
    public int firstUniqChar(String s) {
        for(int i = 0; i<s.length(); i++){
            int first = s.indexOf(s.charAt(i));
            int last = s.lastIndexOf(s.charAt(i));
            if(first == last) return i;
        }
        return -1;
    }
}