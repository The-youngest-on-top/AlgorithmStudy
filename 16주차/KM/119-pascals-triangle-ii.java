class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> answer = new ArrayList<>();
        if(rowIndex<2){
            for(int i = 0; i<=rowIndex; i++) answer.add(1);
            return answer;
        }
        answer.add(1);
        answer.add(1);
        for(int i = 2; i<=rowIndex; i++){
            List<Integer> prev = new ArrayList<>();
            prev.add(1);
            for(int j = 0; j<answer.size()-1; j++){
                prev.add(answer.get(j) + answer.get(j+1));
            }
            prev.add(1);
            answer = prev;
        }
        return answer;
    }
}