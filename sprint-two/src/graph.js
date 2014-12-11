

var Graph = function(){
  //object to store nodes
  this.storage = {};
  //object to store edges
  //as key:value
  this.edges = {};

};

Graph.prototype.addNode = function(node){
  this.storage[node] = node;
};

Graph.prototype.contains = function(node){
  var doesContain = false;
  this.forEachNode(function(item){
    if(node === item){
      doesContain = true;
    }
  });
  return doesContain;
};

Graph.prototype.removeNode = function(node){
  delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if(this.edges[fromNode] === toNode){
    return true;
  }
  if(this.edges[toNode] === fromNode){
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges[fromNode] = toNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
  for(var item in this.storage){
    console.log('foreach');
    cb(item);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



