const assert = require('assert');
const f = require('./make.js');

it('apply make function', () => {
  function sum(a, b) {
    return a + b;
  }
  function multiply(a, b) {
    return a * b;
  }
  assert.equal(f.make(15)(34, 21, 666)(41)(sum), 777);
  assert.equal(f.make(2, 3)(5)(multiply), 30);
});
