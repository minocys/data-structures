var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.length = 0;
  newQueue.head = 0;
  newQueue.key = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function(){
  return this.length;
}

queueMethods.enqueue = function(value){
  //increment length
  this.length++;
  //increment key
  this.key++;
  //storage[key] = value
  this.storage[this.key] = value;
  if(this.length === 1){
    //set head to first value
    this.head = this.key;
  }
}


queueMethods.dequeue = function(){
  //if length === 0
  if(this.length === 0){
    return undefined;
  }
  var item = this.storage[this.head];
  delete this.storage[this.head];
  //decrement length
  this.length--;
  //if length > 0
  if(this.length > 0){
  //increment head
    this.head++;
  }
  return item;
}
