var Queue = function(){
  var someInstance = {};
  var length = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  var first;
  var key = 0;


  // Implement the methods below

  someInstance.enqueue = function(value){
    //length ++
    length++;
    //key ++
    key++;
    //add item to storage[key]
    storage[key] = value;
    //if length === 1
    if( length === 1){
      //first = key;
      first = key;
    }
  };

  someInstance.dequeue = function(){
    if( length === 0){
      return undefined;
    }
    //length --
    length--;
    //retrieve first item storage[first]
    var item = storage[first];
    //delete first item
    delete storage[first];
    //if there is next item
    if(storage[first+1] === undefined){
      //set first to next item (first + 1)
      first = undefined;
    } else { 
      first++;
    }
    return item;
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
