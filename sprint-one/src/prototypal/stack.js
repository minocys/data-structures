var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.counter = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value){
  //counter++;
  this.counter++;
  this.storage[this.counter] = value;
}

stackMethods.pop = function(){
  //if counter = 0
  if(this.counter > 0){
    this.counter--;
  }
  var item = this.storage[this.counter+1];
  delete this.storage[this.counter+1];
  return item;
  
}

stackMethods.size = function(){
  return this.counter;
}
