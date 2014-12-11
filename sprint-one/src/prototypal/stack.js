var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.count = 0;  
  return newStack;
};

var stackMethods = {
  size: function(){
    return this.count;
  },

  push: function(value){
    this.count++;
    this.storage[this.count] = value;
  },

  pop: function(){
    if(this.count === 0){
      return undefined;
    }
    var item = this.storage[this.count];
    this.count--;
    return item;
  }

};



