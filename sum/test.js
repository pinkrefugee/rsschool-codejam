const assert = require('assert');
const sum = require('./sumOfOther.js');

it('return sum of other elements in array', () => {
  assert.deepEqual(sum.sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
});
