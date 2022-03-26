class MinStack:

    def __init__(self):
        self.__stack=[]

    def push(self, val: int) -> None:
        self.__stack.append(val)

    def pop(self) -> None:
        if self.__stack:
            self.__stack.pop()

    def top(self) -> int:
        if self.__stack:
            return self.__stack[-1]

    def getMin(self) -> int:
        return min(self.__stack)


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()