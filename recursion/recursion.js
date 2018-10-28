function recursion(obj) {
  const arr = [];
  function inner(node, i = 0) {
    if (!arr[i]) {
      arr.push([node.value]);
    } else { arr[i].push(node.value); }
    if (node.left && node.right) {
      inner(node.left, i + 1);
      inner(node.right, i + 1);
    }
  }
  inner(obj);
  return arr;
}
module.exports = { recursion };
