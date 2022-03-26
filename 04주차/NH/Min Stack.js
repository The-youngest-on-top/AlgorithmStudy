function MinStack() {
    this.stack=[];
  };
  
  MinStack.prototype.push = function(val) {
    this.stack.push(val);
  };
  
  MinStack.prototype.pop = function() {
      return this.stack.pop();
  };
  
  
  MinStack.prototype.top = function() {
      return this.stack[this.stack.length-1];
  };
  
  
  MinStack.prototype.getMin = function() {
      let min=this.stack[0];
      for(let num of this.stack){
          if(num<min)min=num;
      }
      return min;
  };
  