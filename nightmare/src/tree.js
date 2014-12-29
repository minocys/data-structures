var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  //create newTree
  var tree = Tree(value);
  tree.parent = this;
  //append newTree to previousTree.children
  this.children.push(tree);

};

treeMethods.contains = function(target){

  if(this.value === target){
    return true;
  }

  if(this.children.length > 0){
    for(var i = 0; i < this.children.length; i++){
        if(this.children[i].contains(target)){
          return true;
        }
    }
  }
  return false;
};

treeMethods.removeFromParent = function(){
  //returns new tree item
  var newTree = this;
  //remove newTree from this.parent.children
  for (var x = 0; x < this.parent.children.length; x++){
    if(this.parent.children[x] === this){
      this.parent.children.splice(x, 1);
    }
  }
  //set newTree parent to null
  newTree.parent = null;

  return newTree;
};

treeMethods.traverse = function(callback){
  if(this.value){
    callback(this.value);
  }
  if(this.children.length > 0){
    for(var i = 0; i < this.children.length; i++){
      this.children[i].traverse(callback);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
