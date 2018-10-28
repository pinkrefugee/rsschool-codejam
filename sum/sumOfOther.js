function sumOfOther(arr) {
  const sum = arr.reduce((a, b) => a + b);
  return arr.map(item => sum - item);
}
module.exports = { sumOfOther };
