import java.util.*;
class Solution {
    public boolean isIsomorphic(String s, String t) {
        HashMap<Character, Character> hm = new HashMap<>();
        Set<Character> set = new HashSet<>();
        for(int i = 0; i<s.length(); i++){
            char a = s.charAt(i);
            char b = t.charAt(i);
            if(!hm.containsKey(a)){
                if(!set.contains(b)){
                    hm.put(a,b);
                    set.add(b);
                } else {
                    return false;
                }
            } else {
                if(hm.get(a) != b){
                    return false;
                }
            }
        }
        return true;
    }
}