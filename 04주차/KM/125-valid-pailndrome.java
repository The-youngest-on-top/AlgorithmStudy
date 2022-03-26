class Solution {
    public boolean isPalindrome(String s) {
        s = s.toLowerCase();
        String result = s.replaceAll("[^a-z0-9]", "");
        StringBuilder reverse = new StringBuilder(result);
        if(result.equals(reverse.reverse().toString())) return true;
        return false;
    }
}
