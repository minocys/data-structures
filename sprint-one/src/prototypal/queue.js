var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.first = 0;
  newQueue.key = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {
  size : function(){
    return this.key - this.first;
  },

  enqueue : function(value){
    this.storage[this.key++] = value;
    if(this.size === 1){
      this.first = this.key;
    }
  },

  dequeue : function(){
    if(this.size() > 0){
      var item = this.storage[this.first];
      delete this.storage[this.first];
      this.first = (this.size() > 0) ? this.first + 1 : undefined;
      return item;
    }
    return undefined;
  }
};


