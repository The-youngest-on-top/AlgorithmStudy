class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> result = new ArrayList();
        for(int i = 1; i<=numRows; i++){
            List<Integer> row = new ArrayList();
            for(int j=0; j<i; j++){
                if(j==0 || j==i-1){
                    row.add(1);
                } else {
                    List<Integer> prevRow = result.get(i-2);
                    int a = prevRow.get(j-1);
                    int b = prevRow.get(j);
                    row.add(a+b);
                }
            }
            result.add(row);
        }
        return result;
    }
}