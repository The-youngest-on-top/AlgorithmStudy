import java.util.List;
import java.util.ArrayList;
import java.util.Stack;
class Solution {
    List<String> answer = new ArrayList<>();
    public List<String> generateParenthesis(int n) {
        makeParentheses(new StringBuilder(), n, n, n*2);
        return answer;
    }
    public void makeParentheses(StringBuilder parenthes, int open, int close, int length){
        if(parenthes.length() == length){
            if(checkParentheses(parenthes.toString())) answer.add(parenthes.toString());
            return;
        }
        if(open > 0) {
            makeParentheses(parenthes.append("("), open-1, close, length);
            parenthes.deleteCharAt(parenthes.length() - 1);
        }
        if(close > 0) {
            makeParentheses(parenthes.append(")"), open, close-1, length);
            parenthes.deleteCharAt(parenthes.length() - 1);
        }
    }
    public boolean checkParentheses(String parenthes){
        Stack<Character> st = new Stack<>();
        for(char c : parenthes.toCharArray()){
            if(c == '('){
                st.push('(');
            } else {
                if(st.isEmpty()) return false;
                st.pop();
            }
        }
        if(!st.isEmpty()) return false;
        return true;
    }
}