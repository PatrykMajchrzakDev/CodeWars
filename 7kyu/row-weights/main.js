// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
// assert.deepEqual(rowWeights([80]), [80,0]);
//     assert.deepEqual(rowWeights([100,50]), [100,50]);
//     assert.deepEqual(rowWeights([50,60,70,80]), [120,140]);
//     assert.deepEqual(rowWeights([13,27,49]), [62,27]);
//     assert.deepEqual(rowWeights([70,58,75,34,91]), [236,92]);
//     assert.deepEqual(rowWeights([29,83,67,53,19,28,96]), [211,164]);
//     assert.deepEqual(rowWeights([0]), [0,0]);
//     assert.deepEqual(rowWeights([100,51,50,100]), [150,151]);
//     assert.deepEqual(rowWeights([39,84,74,18,59,72,35,61]), [207,235]);
//     assert.deepEqual(rowWeights([0,1,0]), [0,1]);

function rowWeights(array) {
  let team1 = [];
  let team2 = [];
  if (array.length === 1) {
    return [array[0], 0];
  }
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      team1.push(array[i]);
    } else {
      team2.push(array[i]);
    }
  }
  return [
    team1.reduce((prev, curr) => prev + curr),
    team2.reduce((prev, curr) => prev + curr),
  ];
}

//Doesnt work for rowWeights([100,51,50,100]), [150,151]); ?????????????
// function rowWeights(array) {
//     if (array.length === 1) {
//       return [array[0], 0];
//     }
//     let team1 = array.filter((item) => array.indexOf(item) % 2 === 0);
//     let team2 = array.filter((item) => array.indexOf(item) % 2 === 1);
//     return [
//       team1.reduce((prev, curr) => prev + curr),
//       team2.reduce((prev, curr) => prev + curr),
//     ];
//   }
