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

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
