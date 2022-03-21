class Solution {
    public int romanToInt(String s) {
        int result = 0;
        
        for(int i = 0; i<s.length(); i++){
            char cur = s.charAt(i);
            char next = 'a';
            if(i!= s.length()-1)
                next = s.charAt(i+1);
            switch(cur){
                case 'I':
                    if(next == 'V' || next == 'X')
                        result -= 1;
                    else 
                        result += 1;
                    break;
                case 'V':
                    result += 5;
                    break;
                case 'X':
                    if(next == 'L' || next == 'C')
                        result -= 10;
                    else
                        result += 10;
                    break;
                case 'L':
                    result += 50;
                    break;
                case 'C':
                    if(next == 'D' || next == 'M')
                        result -= 100;
                    else
                        result += 100;
                    break;
                case 'D':
                    result += 500;
                    break;
                case 'M':
                    result += 1000;
                    break;
            }
        }
        return result;
    }
}