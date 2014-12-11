var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.first = 0;
  newQueue.key = 0;
  newQueue.length = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {
  size : function(){
    return this.length;
  },

  enqueue : function(value){
    this.key++;
    this.length++;
    this.storage[this.key] = value;
    if(this.length === 1){
      this.first = this.key;
    }
  },

  dequeue : function(){
    if(this.length > 0){
      var item = this.storage[this.first];
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

};


