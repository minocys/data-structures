var BloomFilter = function(){
  var newFilter = Object.create(bloomMethods);
  newFilter.limit = 18;
  newFilter.storage = LimitedArray(newFilter.limit);
  return newFilter;
}

var bloomMethods = {
  insert : function(value){
    var keys = {a : bloomHash(value, 0, 9),b : bloomHash(value, 10, 18), c : bloomHash(value, 0, 18)};
    console.log(keys);
    for(item in keys){
      if(!this.storage.get(keys[item])){
        this.storage.set(keys[item], [true]);
      } else {
        this.storage.get(keys[item]).push(true);
      }
    }
  },

  retrieve : function(value){
    var keys = {a : bloomHash(value, 0, 9),b : bloomHash(value, 10, 18), c : bloomHash(value, 0, 18)};
    var counter = 0;
    for(item in keys){
      var inceptionArray = this.storage.get(keys[item]);
      if(inceptionArray && inceptionArray[0] === true ){
        counter++;
      }
    }
    if(counter === 3){
      return true;
    } 
    return false;
  },

  remove : function(value){
    var keys = {a : bloomHash(value, 0, 9),b : bloomHash(value, 10, 18), c : bloomHash(value, 0, 18)};
    for (item in keys){
      this.storage.get(keys[item]).splice(0,1);
      console.log(this.storage.get(keys[item]), keys[item]);
    }
  }

};