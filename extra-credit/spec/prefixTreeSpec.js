describe('prefixTree', function() {
  var prefixTree;

  beforeEach(function() {
    prefixTree = PrefixTree();
  });

  it('should have methods named "insert", and "lookup"', function() {
    expect(prefixTree.insert).to.be.a("function");
    expect(prefixTree.lookup).to.be.a("function");
  });


  it('should insert items', function() {
    prefixTree.insert('arc');
    prefixTree.insert('archer');
  });
  /*
  it('should store values with insert', function() {
    bloomFilter.insert('heyo');
    expect(bloomFilter.retrieve('heyo')).to.equal(true);
  });

  it('should not contain values that were not inserted', function() {
    bloomFilter.insert('Spielberg');
    expect(bloomFilter.retrieve('Spielberg')).to.equal(true);
    expect(bloomFilter.retrieve('Seagal')).to.equal(false);
  });

  it('should remove values with remove', function() {
    bloomFilter.insert('Spielberg');
    bloomFilter.insert('Soderberg');
    bloomFilter.remove('Spielberg');
    expect(bloomFilter.retrieve('Spielberg')).to.equal(false);
    expect(bloomFilter.retrieve('Soderberg')).to.equal(true);
  });*/

});