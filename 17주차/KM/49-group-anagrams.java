class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        HashMap<String, List<String>> hm = new HashMap<>();
        for(String str: strs){
            String temp;
            char[] c = str.toCharArray();
            Arrays.sort(c);
            temp = new String(c);
            if(!hm.containsKey(temp)){
                hm.put(temp, new ArrayList<>());
            }
            hm.get(temp).add(str);
        }
        return new ArrayList<>(hm.values());
    }
}