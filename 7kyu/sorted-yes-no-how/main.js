// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.
// describe("isSortedAndHow", function() {
//     it("[1, 2]", function() {
//       Test.assertEquals(isSortedAndHow([1, 2]), 'yes, ascending');
//     });
//     it("[15, 7, 3, -8]", function() {
//       Test.assertEquals(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
//     });
//     it("[4, 2, 30]", function() {
//       Test.assertEquals(isSortedAndHow([4, 2, 30]), 'no');
//     });
//   });

function isSortedAndHow(array) {
  const isSortedAndHow = (array) => {
    let ascending = array.filter((e, i, a) => e > a[i + 1]).length == 0;
    let descending = array.filter((e, i, a) => e < a[i + 1]).length == 0;

    return ascending ? "yes, ascending" : descending ? "yes, descending" : "no";
  };
}
