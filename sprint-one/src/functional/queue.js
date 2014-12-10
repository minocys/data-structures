var Queue = function(){
  var someInstance = {};
  //variables for indexes
  //var head, tail;
  var head = 0;
  var tail = 0;
  var length = 0;
  //variable queueSize
  //var queueSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    //increment tail
    tail++;
    //Store value
    storage[tail] = value;
    //increment length
    length++;
    if( length === 1 ){
      head = tail; 
    }

  };

  someInstance.dequeue = function(){
    //restraint
    if(length <= 0){
      length = 0;
    }else{
      length--;
    }
    //remove head value
    var item = storage[head];
    delete storage[head];
    //if something in queue
    if(length > 0){
      //point head at next value/increment head
      head++;
    } 
    return item;
  };

  someInstance.size = function(){
    //return size
    return length;
  };

  return someInstance;
};
