// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  let result = [];
  let spaces = 0;
  if (nFloors === 1) {
    return ["*"];
  } else {
    for (let i = nFloors; i > 0; i--) {
      if (i === nFloors) {
        result.push("*".repeat(nFloors * 2 - 1));
      } else {
        spaces += 1;
        result.push(
          " ".repeat(spaces) + "*".repeat(i * 2 - 1) + " ".repeat(spaces)
        );
      }
    }
  }
  return result.reverse();
}
