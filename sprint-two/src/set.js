var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage[item] = typeof(item);
};

setPrototype.contains = function(item){
  var type = typeof(item);
  item = item.toString();
  return (this._storage[item] === type);
};

setPrototype.remove = function(item){
  if(this.contains(item)){
    var result = this._storage[item];
    delete this._storage[item];
    return result;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
