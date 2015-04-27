var PrefixTree = function(value){
  var newTree = Object.create(prefixTreeMethods);
  //storage for child nodes
  newTree.nodes = {};
  //value
  newTree.value = value || 'treetop';
  //recommended value/word
  newTree.recommended;
  return newTree;
}

var prefixTreeMethods = {
  //generate tree
  insert : function(value){
    //2 loops:
    //1. traverses nodes till position
    //where no node exists for letter in value
    //while
    var index = 0,
        letter = value.slice(0,1),
        previous = this;
    while(index < value.length){
      //create substring
      //if this.nodes[substring]
      if(previous.nodes[letter]){
        //previous = this.nodes[substring]
        previous = previous.nodes[letter];
        //increment
        index++;
        //set new letter
        letter = value.slice(index, index + 1);
      } else {
        break;
      }
    }
    //2. inserts new nodes till full word 
    //(and recommendation variable along the way)
    //starts at where previous node left of
    //value - v(node) - va(node) - val(node) - valu(node) - value(fullword)
    while(letter !== ""){
      //insert node
      previous = previous.nodes[letter] = PrefixTree(letter);
      previous.recommended = value;
      index++;
      letter = value.slice(index, index + 1);
    }
  },

  //lookup items in tree
  lookup : function(value){
    var index = 0,
        letter = value.slice(0,1),
        previous = this;
    while(index < value.length){
      if (previous.nodes[letter]){
        previous = previous.nodes[letter];
        index++;
        letter = value.slice(index, index+1)
      } else {
        break;
      }
    }
    console.log(letter);
    var recommendations = [this.recommended];
    for(var item in this.nodes){
      if(!_.contains(recommendations, item.recommended)){
        recommendations.push(this.recommended);
      }
    }
    return recommendations;
  },

}