var BloomFilter = function(){
  var bloomfilter = Object.create(bloomMethods);
  bloomfilter._bitVector = [];
  return bloomfilter;
};

var bloomMethods = {};


bloomMethods.insert = function(value){
  var a = 0, b = 0, c = 0;
  this._bitVector[bloomHash(value, 0, 8)] = ++a;
  this._bitVector[bloomHash(value, 9, 18)] = ++b;
  this._bitVector[bloomHash(value, 0, 18)] = ++c;
};

bloomMethods.retrieve = function(value){
  return !!(this._bitVector[bloomHash(value, 0, 8)] && 
         this._bitVector[bloomHash(value, 9, 18)] &&
         this._bitVector[bloomHash(value, 0, 18)]);
};