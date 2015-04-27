var HashTable = function(){
  this._currentSize = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype._resize = function(newLimit) {
  var oldStorage = this._storage;

  this._currentSize = 0;
  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);

  oldStorage.each(function(bucket) {
    if (!bucket) { return; }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]); 
    }
  }.bind(this));
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
  if (this._currentSize > this._limit * 0.75) {
    this._resize(this._limit * 2);
  }
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
  if (this._currentSize < this._limit * 0.25) {
    this._resize(this._limit / 2);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
