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
      returnthis.left.contains(target);
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
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
