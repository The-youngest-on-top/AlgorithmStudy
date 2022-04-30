import java.math.BigInteger;
class Solution {
    public String addBinary(String a, String b) {
        BigInteger intA = new BigInteger(a,2);
        BigInteger intB = new BigInteger(b,2);
        return  intA.add(intB).toString(2);
    }
}