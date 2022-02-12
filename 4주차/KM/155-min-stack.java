class MinStack {
    private ArrayList<Integer> minStack;
    public MinStack() {
        minStack = new ArrayList<>();    
    }
    
    public void push(int val) {
        minStack.add(val);
    }
    
    public void pop() {
        minStack.remove(minStack.size()-1);
    }
    
    public int top() {
        return minStack.get(minStack.size()-1);
    }
    
    public int getMin() {
        int min = minStack.get(0);
        for(int i = 1; i<minStack.size(); i++){
            min = (minStack.get(i) < min) ? minStack.get(i) : min;
        }
        return min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */