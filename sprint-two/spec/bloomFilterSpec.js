describe('bloomFilter', function() {
  var bloomFilter;

  beforeEach(function() {
    bloomFilter = BloomFilter();
  });

  it('should have methods named "insert", "remove", and "retrieve', function() {
    expect(bloomFilter.insert).to.be.a("function");
    expect(bloomFilter.retrieve).to.be.a("function");
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

  describe('bloomFilter loop', function() {
    var testInputs;
    var approx = Math.pow(1 - Math.pow(Math.E, ((-15)/18)), 3) * 100;


    beforeEach(function() {
      testInputs = ['hackreactor', 'adobe', 'apple'];
      testInputs.forEach(function(input) {
        bloomFilter.insert(input);
      });
    });
  
    it('should log empircal rate vs. Bloom Filter rate', function() {
      var falsePositiveCount = 0;
      testInputs.push('blah', 'great');
      for (var i = 0; i < 10000; i++) {
        var random = Math.floor(Math.random() * 5);
        if (!bloomFilter.retrieve(testInputs[random])) {
          falsePositiveCount++;
        }
      }
      console.log('Empirical Rate: '+(falsePositiveCount / 100)+'%');
      console.log('Compared to the Bloom Filter Approximation(m=18, k=3): '+approx+'%');
    });
  });

});