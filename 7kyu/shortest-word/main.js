// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//       assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//       assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3);
//       assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
//     })
//   })

function findShort(s) {
  //get array of item lengths
  arr = s.split(" ").map((item) => item.length);
  //return lowest length
  return Math.min(...arr);
}
