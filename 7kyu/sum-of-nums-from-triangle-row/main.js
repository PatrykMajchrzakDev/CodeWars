// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  let startingNumber = n * (n - 1) + 1;
  let numbersInRow = [];
  if (n === 1) {
    return n;
  } else {
    for (let i = 1; i <= n; i++) {
      if (i === 1) {
        numbersInRow.push(startingNumber);
      } else {
        numbersInRow.push((startingNumber += 2));
      }
    }
  }
  console.log(numbersInRow);
  return numbersInRow.reduce((total, curr) => (total += curr), 0);
}

//OTHERS LMAO
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
