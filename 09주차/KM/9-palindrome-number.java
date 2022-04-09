class Solution {
    public boolean isPalindrome(int x) {
        String s = String.valueOf(x);
        StringBuilder sb = new StringBuilder(s);
        if(s.equals(sb.reverse().toString())) return true;
        else return false;
    }
}