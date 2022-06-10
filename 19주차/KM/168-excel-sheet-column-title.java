class Solution {
    public String convertToTitle(int columnNumber) {
        StringBuilder sb = new StringBuilder();
        while(columnNumber > 0){
            int c = 'A' + ((--columnNumber) % 26);
            sb.append((char)c);
            columnNumber /= 26;
            
        }
        return sb.reverse().toString();
    }
}

/*
A 1 * 26^0 = 1
AB 1 * 26^1 + 2 * 26 ^ 0 = 28
ZY 26 * 26^1 + 25 * 26 ^ 0 = 701
*/

    
