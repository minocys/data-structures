describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should set a parent value when adding children to the tree', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].parent).to.equal(tree.children[0]);
  });

  it('should disassociate the tree with it\'s parent (both ways)', function() {
    tree.addChild(5);
    tree.addChild(4);
    tree.children[0].addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].children[1].addChild(10);
    var newTree = tree.children[0].children[1].removeFromParent();
    //expect(newTree.value).to.equal(7);
    expect(tree.contains(7)).to.equal(false);
    expect(newTree.contains(10)).to.equal(true);
  });

  it('should traverse and apply a function to each value', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    tree.addChild(5);
    tree.addChild(4);
    tree.children[0].addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].children[1].addChild(10);
    tree.traverse(func);
    expect(array.length).to.equal(5);
  });

});
