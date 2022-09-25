// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
  let total = 1.25;
  let iter = 4;

  //check for fixed results
  if (n === 0 || n === 1) {
    return n.toFixed(2).toString();
  } else if (n === 2) {
    return (1.25).toString();
    //iter to get 1/7, 1/10, 1/13 and so on
  } else {
    for (let i = 1; i <= n - 2; i++) {
      total += 1 / (iter + 3 * i);
    }
  }
  return total.toFixed(2).toString();
}
