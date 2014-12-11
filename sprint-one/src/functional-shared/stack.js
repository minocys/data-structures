var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = {};
  //properties/variables
  //storage
  newStack.storage = {};
  //counter
  newStack.counter = 0;
  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

//property of stackMethods - size
stackMethods.size = function(){
  return this.counter;
};

//storage[1] = a;
stackMethods.pop = function(){
  var item = this.storage[this.counter];
  delete this.storage[this.counter];
  if(this.counter > 0){
    this.counter--;
  }
  return item;
};

stackMethods.push = function(value){
  //increment counter
  this.counter++;
  //push item in container
  this.storage[this.counter] = value;
  //storage[1] = a;
}

var plates = Stack();
plates.counter === 0;
plates.size
