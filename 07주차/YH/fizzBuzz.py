class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        
        List = []
        
        for i in range(n) : 
            idx = i + 1
            if idx % 3 == 0 and idx % 5 == 0 : List.append("FizzBuzz")
            elif idx % 3 == 0 : List.append("Fizz")
            elif idx % 5 == 0 : List.append("Buzz")
            else : List.append(str(idx))
                
        return List