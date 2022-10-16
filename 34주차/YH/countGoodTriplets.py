class Solution:
    def countGoodTriplets(self, arr: List[int], a: int, b: int, c: int) -> int:

        L = len(arr)
        n = 0
        
        for i in range(L-2) :
            x = arr[i]
            for j in range(i+1,L-1) :
                y = arr[j]
                if abs(x-y) <= a :
                    for k in range(j+1,L) :
                        z = arr[k]
                        if abs(y-z)<=b and abs(x-z)<=c : 
                            n += 1
                            
        return n