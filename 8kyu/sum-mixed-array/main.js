// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  return x.reduce((total, item) => +total + +item);
}

//   assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
//   assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
//   assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);
//   assert.strictEqual(sumMix(['1', '5', '8', 8, 9, 9, 2, '3']), 45);
//   assert.strictEqual(sumMix([8, 0, 0, 8, 5, 7, 2, 3, 7, 8, 6, 7]), 61);
