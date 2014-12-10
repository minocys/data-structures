var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.length = 0;
  newQueue.first = 0;
  newQueue.key = 0;
  newQueue.first = undefined;
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function(){
  return this.length;
}

queueMethods.enqueue = function(value){
  this.length++;
  this.key++;
  this.storage[this.key] = value;
  if(this.length === 1){
    this.first = this.key;
  }
}

queueMethods.dequeue = function(){
  if(this.length > 0){
    var item = this.storage[this.first];
    console.log(item);
    delete this.storage[this.first];
    this.length--;
    if(this.storage[this.first + 1] === undefined){
      this.first = undefined;
    } else {
      this.first++;
    }
    return item;
  } 
  return undefined;
}

