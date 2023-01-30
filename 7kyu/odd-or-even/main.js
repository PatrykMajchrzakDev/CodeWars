// Given a list of integers, determine whether the sum of its elements is odd or even.

function oddOrEven(array) {
  sum = array.reduce((start, add) => start + add, 0);
  return sum % 2 === 0 ? "even" : "odd";
}
