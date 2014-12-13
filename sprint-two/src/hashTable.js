var HashTable = function(){
  this._currentSize = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.adjustLimit = function(size) {
  this._limit = Math.pow(2, Math.floor(size/7 + 3));
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //if item at .storage i
  var newItem = {};
  newItem[k] = v;
  if(!this._storage.get(i)){
    var array = [newItem];
    this._storage.set(i, array)
  } else {
    this._storage.get(i).push(newItem);
  }
  this._currentSize++;
  this.adjustLimit(this._currentSize);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(i);
  for(var x = 0; x < array.length; x++){
    if(array[x].hasOwnProperty(k)){
      return array[x][k];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(i);
  for(var x = 0; x < array.length; x++){
    if(array[x].hasOwnProperty(k)){
      array.splice(x, 1);
    }
  }
  this._currentSize--;
  this.adjustLimit(this._currentSize);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
