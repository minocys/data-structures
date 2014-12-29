var BTree = function(degree){
  var tree = Object.create(bTMethods);
  tree.degree = degree; //degree === maximum number of children
  tree.makeNode = function(keys, children, isLeaf, n){
    //node creation function
    return {
      keys : keys || [],
      children : children || [],
      isLeaf : (isLeaf === undefined) ? false : true,
      keyCount : n || 0,
      isFull : function(){
        return this.keyCount === degree-1;
      }
    };
  };
  tree.root = tree.makeNode([],[],true,0);
  return tree;
}

var bTMethods = {

  //recursive search from root
  search : function(value, node){
    //assign root = this.root || node
    node = node || this.root;
    //create index
    var index = 0;
    //use a while loop increment index to where value is < node.keys[i]
    //while index is <= root.keys.length && value > root.keys[i]
    while( index < node.keyCount && value > node.keys[index]){
      //increment index
      index++;
    }
    //if index is <= root.keys.length && value === key
    if ( value === node.keys[index]){
      //return item
      return node.keys[index];
    }
    //if isLeaf
    if (node.isLeaf){
      //return null
      return null;
    } else {
      //return search(value, root.children[index])
      return search(value, node.children[index]);
    }
  },

  splitNode : function(parent, current, index){
    var t = Math.ceil(this.degree/2);
    var newKeys  = current.keys.splice(t, t-1);
    if(current.isLeaf){
      var newChildren = [];
    } else {
      var newChildren = current.children.splice(t, t);
    }
    var rightNode = this.makeNode(newKeys, newChildren, current.isLeaf, t-1);

    //set current keycount = t-1
    //current.keyCount = t;
    //for x = parent.keyCount + 1 (number of children) down to index + 1
    for(var x = parent.keyCount + 1; x > index + 1; x--){
      //parent.children[x+1] = parent.children[x] <-----shift children in parent right!
      parent.children[x] = parent.children[x-1];
    }
    //add node to parent.children[index + 1] <------- add node to parent
    //                                                      to right of split node
    parent.children[index + 1] = rightNode;
    //for x = parent.keyCount till index
    for( var x = parent.keyCount; x > index; x--){
      //parent.key[x + 1] = parent.key[x] <-------shift keys in parent right!
      parent.keys[x] = parent.keys[x-1];
    }
    //add current.key[t] to parent.key[index]<------ add node to the LEFT of new node ^^
    parent.keys[index] = current.keys.pop();
    current.keyCount = t-1;
    //increment parent keyCount
    parent.keyCount++;

    // //newNode function(node, start, end)
    // var newNode = function(node, start, end){
    //   //newKeys = store spliced keys from current (start, end)
    //   var newKeys = node.keys.splice(start, end-start); //modifies original node, desired?
    //   //if isLeaf
    //   if(node.isLeaf){
    //     //newChildren = []
    //     var newChildren = [];
    //   }
    //   else{
    //     //newChildren = store spliced children from current (start, end)
    //     var newChildren = node.children.splice(start, end-start);// modifies original node, desired?
    //   }
    //   //create new node, newKeys, newChildren, current.isLeaf, end-start
    //   return makeNode(newKeys, newChildren, current.isLeaf, end-start);
    // }

  },

  insert : function(value){
    //establish root
    var root = this.root;
    //if root is full
    if(root.isFull()){
      //this.root = makeNode([], [root], false, 0) --- make empty node with old root as child
      var newRoot = this.makeNode();
      console.log(newRoot);
      newRoot.children.push(root);
      this.root = newRoot;
      //splitChild(this.root, root, 1);
      this.splitNode(this.root, root, 0);
      //insertItem
      this.insertItem(value, this.root);
    } else {
      //insertItem
      this.insertItem(value, root);
    }
  },

  insertItem : function(value, node){
    //set i = node.keyCount --- for looping backwards
    var index = node.keyCount - 1;
    //if node is leaf
    if(node.isLeaf){
      //shift everything to the right in node, loop backwards through keys array
      //while i >= 1 and value < node.keys[i]
      while(index >= 0 && value < node.keys[index]) {
        //node.keys[i+1] = nodes.keys[i]
        node.keys[index + 1] = node.keys[index];
        //decrement i
        index--;
      }
      //insert value into node.keys[i+1]
      node.keys[index+1] = value;
      //keycount++
      node.keyCount++;
    } else {//else find child where new key belongs
      //while i >= 1 and value < node.keys[i]
      while (index >= 0 && value < node.keys[index]){
        //decrement i
        index--;
      }
      //increment i, account for +1 nature of childnodes, access childnode to the right of index
      index++;
      //check if childnode is full -> node.children[i].keyCount === 2*this.degree - 1
      if(node.children[index].isFull()){
        //splitChild(node, node.children[i], i)
        this.splitNode(node, node.children[index], index)
        // check if value > node.keys[i] to figure out which new child value belongs in
        if(value > node.keys[index]){
          //increment i
          index++;
        }
      }
      //insertItem(value, node.children[i])
      this.insertItem(value, node.children[index]);
    }
  },

  remove : function(){

  }

  
};









