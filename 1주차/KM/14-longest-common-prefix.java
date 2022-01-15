class Solution {
    public String longestCommonPrefix(String[] strs) {
        String result= "";
        for(int i = 0 ; i < strs[0].length(); i++){
            result += strs[0].charAt(i);
            for(int j = 1; j < strs.length; j++){
                if(!strs[j].startsWith(result)){
                    result = result.substring(0,result.length()-1);
                    return result;
                }
            }
        }
        return result;
    }
}