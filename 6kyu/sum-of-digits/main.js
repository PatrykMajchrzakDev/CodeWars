// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
  //   n = Array.from(String(n), Number);
  for (let i = n.toString().length; i >= 1; i--) {
    n = Array.from(String(n), Number);
    n = n.reduce((total, current) => total + current);
    if (n.toString().length === 1) {
      return n;
    }
    // console.log(`n: ${n}, i: ${i}, n.length: ${n.toString().length}`);
  }
  return n;
}

//BEST PRACTICES
function digital_root(n) {
  if (n < 10) return n;

  return digital_root(
    n
      .toString()
      .split("")
      .reduce(function (acc, d) {
        return acc + +d;
      }, 0)
  );
}
