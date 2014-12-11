var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //create node
    var newItem = Node(value);
    //if no tail node
    if(this.head === null){
      //tail = newItem
      this.head = newItem;
      this.tail = newItem;
    } else {
      this.tail.next = newItem;
      this.tail = newItem;
    }
    //assign tail node.next to new node
    //assign tail to new node
  };

  list.removeHead = function(){
    var item = this.head.value;
    this.head = this.head.next;
    return item;
  };

  list.contains = function(target){
    var node = this.head;
    while(node.value !== target){
      node = node.next;
      if (node === null){
        return false;
      }
    }
    return true;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
