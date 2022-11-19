// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// Test.assertEquals(solve([[1,2],[4],[5,6]]),4);
// Test.assertEquals(solve([[1,2],[4,4],[5,6,6]]),4);
// Test.assertEquals(solve([[1,2],[3,4],[5,6]]),8);
// Test.assertEquals(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72);

function solve(arr) {
  //arr w/o duplicates
  arr = arr.map((item) => {
    return Array.from(new Set(item));
  });
  let product = 1;
  //each nested arr * length of it gives total sum
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i].length;
  }
  return product;
}
