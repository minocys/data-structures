var BinarySearchTree = function(value){
  var newTree = Object.create(binaryMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
}; 

var binaryMethods = {
  insert : function(value){
    //recursive logic
    console.log(this);
    if (value >= this.value){
      if (this.right !== null){ 
        this.right.insert(value);
      } else {
        var seed = BinarySearchTree(value);
        this.right = seed;
      }
    } else if (value < this.value) {
      if(this.left !== null){
        this.left.insert(value);
      } else
        var seed = BinarySearchTree(value);
        this.left = seed;
    }
  },

  contains : function(target){

  },

  depthFirstLog : function(){

  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
