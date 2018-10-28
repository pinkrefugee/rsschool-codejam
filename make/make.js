function make(...par) {
  const arr = [];
  par.forEach((item) => {
    arr.push(item);
  });
  function heist(...args) {
    if (typeof args[0] === 'function') {
      return arr.reduce(args[0]);
    }
    args.forEach((item) => {
      arr.push(item);
    });
    return heist;
  }
  return heist;
}

module.exports = { make };
