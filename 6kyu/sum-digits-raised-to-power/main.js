// The number
// 89
// 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number:

// Task
// We need a function to collect these numbers, that may receive two integers
// [a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Examples
// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89] 8^1 + 9^2
// If there are no numbers of this kind in the range
// [a,b] the function should output an empty list.

// 90, 100 --> []

function sumDigPow(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    let number = Array.from(String(i), Number);
    if (number.length === 1) {
      result.push(i);
    } else {
      let checkNum = 0;
      for (let j = 0; j < number.length; j++) {
        checkNum += Math.pow(number[j], j + 1);
      }
      checkNum === i ? result.push(i) : null;
    }
  }
  return result;
}