var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);

    if (this.tail === null){
      this.tail = newNode;
      // the first time add to tail is called, head needs to be set
      this.head = newNode;
    } else {
      //set previous item next newNode
      this.tail.next = newNode;
      newNode.previous = this.tail;
      //set tail to newNode
      this.tail = newNode;
    }
  };

  list.removeHead = function(){
    // store "item value" in a new variable
    var previousHead = this.head.value;
    // head needs to be set
    this.head = this.head.next;

    return previousHead;
  };

  list.contains = function(target){
    var node = this.head;
    //iterate
    // a loop that goes through node.next
    while ( node.value !== target) {
      if ( node === this.tail ) {
        return false;
      }
      node = node.next;
    }
    return true;
  };

  list.addToHead = function(value){
    // takes a value and adds it to the front of the list.
    var newNode = Node(value);

    if (this.head === null){
      this.head = newNode;
      // the first time add to tail is called, head needs to be set
      this.tail = newNode;
    } else {
      newNode.next = this.head;  // maybe??
      //set previous item next newNode
      this.head.previous = newNode;
      //set tail to newNode
      this.head = newNode;
    }
  };

  list.removeTail = function(){
    var previousTail = this.tail.value;
    this.tail = this.tail.previous;
    return previousTail;
  };

  return list;
};

var Node = function(value){
  // give node a reference to previous node
  // node.previous = null;
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
