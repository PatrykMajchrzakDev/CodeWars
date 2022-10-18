// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  let arr = [];

  //case to return 0 if number is negative or 0
  if (number < 0 || number === 0) {
    return 0;

    //if number is a multiple of 3 or 5 add it to an array
  } else {
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push(i);
      } else if (i % 3 === 0 && i % 5 != 0) {
        arr.push(i);
      } else if (i % 5 === 0 && i % 3 != 0) {
        arr.push(i);
      }
    }
  }
  // count total of nums in an array
  return arr.reduce((total, add) => (total += add));
}
