var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.count = 0;
  newStack.storage = {};
  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.count++;
  this.storage[this.count] = value;
}

stackMethods.pop = function(){
  if(this.count === 0){
    return undefined;
  }
  var item = this.storage[this.count];
  delete this.storage[this.count];
  this.count--;
  return item;
}

stackMethods.size = function(){
  return this.count;
}

plates.size
