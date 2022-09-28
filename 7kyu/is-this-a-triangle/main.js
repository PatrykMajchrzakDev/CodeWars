// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  let arr = [a, b, c];
  let largest = [];
  //find the largest num
  largest.push(Math.max(...arr));

  //remove the largest num from given args
  arr.splice(arr.indexOf(largest[0]), 1);

  //check if triangle can be built
  if (arr[0] + arr[1] > largest[0]) {
    return true;
  } else {
    return false;
  }
}

//OOOOOOOOOOOOORRRRRR

//Just check all conditions at the same time and it works
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}
