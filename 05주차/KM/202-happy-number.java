
class Solution {
    public boolean isHappy(int n) {
        ArrayList<Integer> visited = new ArrayList<>();
        while(!visited.contains(n)){
            visited.add(n);
            int sum = 0;
            while(n > 0){
                sum += Math.pow(n % 10,2);
                n /= 10;
            }
            n = sum;
            if(n==1) return true;
        }
        return false;
    }
}