// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Notes
// it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
// For C: The result is freed.

//Have not finished it
function orderWeight(strng) {
  let result = "";
  arr = strng.split(" ");
  let sumResult = arr.map((item, index) => {
    sum = Array.from(String(item), Number);
    return [sum.reduce((total, add) => total + add), index];
  });
  console.log(sumResult);
  sumResult = sumResult.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < sumResult.length; i++) {
    if (i === sumResult.length - 1) {
      result += `${arr[sumResult[i][1]]}`;
    } else {
      result += `${arr[sumResult[i][1]]} `;
    }
  }
  return result;
}

//Others solution
function orderWeight(strng) {
  const sum = (str) => str.split("").reduce((sum, el) => sum + +el, 0);
  function comp(a, b) {
    let sumA = sum(a);
    let sumB = sum(b);
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
  }
  return strng.split(" ").sort(comp).join(" ");
}
