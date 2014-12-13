describe('bloomFilter', function() {
  var bloomFilter;

  beforeEach(function() {
    bloomFilter = BloomFilter();
  });

  it('should have methods named "insert", "remove", and "retrieve', function() {
    expect(bloomFilter.insert).to.be.a("function");
    expect(bloomFilter.retrieve).to.be.a("function");
    expect(bloomFilter.remove).to.be.a("function");
  });

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
  });

});
