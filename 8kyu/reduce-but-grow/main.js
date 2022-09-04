// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  let total = 1;
  x.forEach((item) => {
    total *= item;
  });
  return total;
}

//BEST PRACTICES

const grow = (x) => x.reduce((a, b) => a * b);
