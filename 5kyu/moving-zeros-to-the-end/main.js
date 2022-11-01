// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let zeros = 0;
  //Returns arr w/o zeros and gets the count of zeros
  arr = arr.filter((item) => {
    if (item === 0) {
      zeros += 1;
    }
    return item !== Number(0);
  });
  //Adds zeros
  for (let i = 0; i < zeros; i++) {
    arr.push(0);
  }
  return arr;
}
