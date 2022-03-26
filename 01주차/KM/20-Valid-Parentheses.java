import java.util.Stack;

class Solution {
    public boolean isValid(String s) {
        Stack<Character> st = new Stack<>();
        for(int i=0; i<s.length(); i++){
            char cur = s.charAt(i);
            char top;
            switch(cur){
                case '(':
                case '{':
                case '[':
                    st.push(cur);
                    break;
                case ')':
                    if(st.isEmpty())
                        return false;
                    top = st.pop();
                    if(top !='('){
                        return false;
                    }
                    break;
                case '}':
                    if(st.isEmpty())
                        return false;
                    top = st.pop();
                    if(top !='{'){
                        return false;
                    }
                    break;
                case ']':
                    if(st.isEmpty())
                        return false;
                    top = st.pop();
                    if(top !='['){
                        return false;
                    }
                    break;
            }
        }
        return st.isEmpty();
    }
}
