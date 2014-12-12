var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.head = 0;
  this.tail = 0;
  this.storage = {};

};

Queue.prototype.size = function(){
  return this.tail-this.head;
};

Queue.prototype.enqueue = function(value){
  //store value
  this.storage[this.tail++] = value;
};

Queue.prototype.dequeue = function(){
  var item = this.storage[this.head];
  //if (size)
  if(this.size()){
    delete this.storage[this.head];
    this.head++;
  }
  return item;
};
