var BinarySearchTree = function(value){
  var newTree = Object.create(binaryMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
}; 

var binaryMethods = {
  insert : function(value){
    //recursive
    if (value > this.value) {
      if(this.right === null){
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
    if (value < this.value) {
      if(this.left === null){
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }
  },

  //although the tree may be different due to insertion sequence
  //placement of numbers will be the same
  contains : function(target){
    if(target === this.value){
      return true;
    }
    //if target is > this.value
    if(target > this.value && this.right){
      return this.right.contains(target);
    }
    if(target < this.value && this.left){
      return this.left.contains(target);
    }
    return false;
  },

  depthFirstLog : function(func){
    func(this.value);
    if(this.left){
      this.left.depthFirstLog(func);
    }
    if(this.right){
      this.right.depthFirstLog(func);
    }
  },

  breadthFirstLog : function(){
    //create queue
    var queue = Queue();
    //create marker
    var marker;
    var result = [];
    //enqueue first tree node
    queue.enqueue(this);
    //while queue is not empty
    while(queue.size() > 0){
      //marker = dequeue
      marker = queue.dequeue();
      result.push(marker.value);
      //if marker.left node
      if(marker.left !== null){
        //enqueue left node
        queue.enqueue(marker.left);
      }
      //if marker.right node
      if (marker.right !== null){
        //enqueue right node
        queue.enqueue(marker.right);
      }

    }
    //made this function return an array instead of logging to console
    //for quicker testing/debugging
    return result;

  }
};


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


/*
 * Complexity: What is the time complexity of the above functions?
 */









