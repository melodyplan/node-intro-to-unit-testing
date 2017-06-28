const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer')

describe('fizzBuzzer', function() {

  it('should be divisible by 15, 5, or 3', function() {
    const fizzBuzzing = [
      {a: 30, b: 15, expected: 0},
      {a: 20, b: 5, expected: 0},
      {a: 15, b: 3, expected: 0}
    ];
    fizzBuzzing.forEach(function(input) {
      const answer = fizzBuzzer(input.a, input.b);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if not divisible by 15, 5, or 3', function() {
    const notBuzzing = [
      ['string', 2],
      [true, 1],
      ['11', 1]
    ];

    notBuzzing.forEach(function(input) {
      function() {
        fizzBuzzer(input[0], input[1])
      }).should.throw(Error);
    });
  });
});
