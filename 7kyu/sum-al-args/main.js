function sum(...arg) {
  let arr = arg;
  let total = arr.reduce((prev, curr) => prev + curr, 0);
  return total;
}
