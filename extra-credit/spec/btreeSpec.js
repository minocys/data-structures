describe('binarySearchTree', function() {
  var bTree;

  beforeEach(function() {
    bTree = BTree(4);
  });

  it('should have methods named "insert", "search", and "remove', function() {
    expect(bTree.insert).to.be.a("function");
    expect(bTree.search).to.be.a("function");
    expect(bTree.remove).to.be.a("function");
  });

  it('should insert values correctly', function() {
    var array = [5,8,1,3,2,2];
    for(var i = 0;i < array.length; i++){
      bTree.insert(array[i]);
    }
    expect(bTree.root.keys[0]).to.equal(2);
    expect(bTree.root.keys[1]).to.equal(5);
  });

  // it('should insert values correctly in a tree with an odd degree', function() {
  //   bTree = BTree(3)
  //   bTree.insert(5);
  //   bTree.insert(8);
  //   bTree.insert(1);
  //   bTree.insert(3);
  //   bTree.insert(2);
  //   bTree.insert(2);
  //   console.log(bTree);
  //   expect(bTree.children[0].keys[0]).to.equal(1);
  //   expect(bTree.children[2].keys[0]).to.equal(8);
  // });

  it('should return correct results with search', function() {
    var array = [5,8,1,3,2,2];
    for(var i = 0;i < array.length; i++){
      bTree.insert(array[i]);
    }
    expect(bTree.search(3)).to.equal(true);
    expect(bTree.search(7)).to.equal(false);
  });

  it('should not contain a value that was removed.', function() {
    var array = [5,8,1,3,2,2];
    for(var i = 0;i < array.length; i++){
      bTree.insert(array[i]);
    }
    bTree.remove(2);
    bTree.remove(2);
    expect(bTree.search(2)).to.equal(false);
  });

});
