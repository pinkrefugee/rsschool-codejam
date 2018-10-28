const assert = require('assert');
const f = require('./recursion.js');

it('show tree nodes in array', () => {
  const tree1 = {
    value: 100,
    left: { value: 90, left: { value: 70 }, right: { value: 99 } },
    right: { value: 120, left: { value: 110 }, right: { value: 130 } },
  };
  const tree2 = { value: 20, left: { value: 10 }, right: { value: 30 } };
  assert.deepEqual(f.recursion(tree1), [[100], [90, 120], [70, 99, 110, 130]]);
  assert.deepEqual(f.recursion(tree2), [[20], [10, 30]]);
});
