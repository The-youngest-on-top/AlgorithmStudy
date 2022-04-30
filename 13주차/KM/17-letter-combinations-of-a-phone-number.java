import java.util.List;
import java.util.ArrayList;
class Solution {
    String[] letters = {"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
    List<String> answer = new ArrayList<>();
    boolean[] visited = new boolean[4]; 
    public List<String> letterCombinations(String digits) {
        if(digits.length() == 0) return answer;
        Combinations("", digits);  
        return answer;
    }
    public void Combinations(String result, String digits){
        if(result.length() == digits.length()){
            answer.add(result);
        } else {
            for(int i = result.length(); i<digits.length(); i++){
                String letter = letters[digits.charAt(i)- '0' - 2];
                for(int j = 0; j<letter.length(); j++){
                    if(!visited[i]){
                        visited[i] = true;
                        Combinations(result+ letter.charAt(j), digits);
                        visited[i] = false;
                    }
                    
                }
            }
        }
    }
}