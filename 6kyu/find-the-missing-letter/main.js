// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

function findMissingLetter(array) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  //get correct string of given length of array and check if string is uppercased
  let givenSectionOfArray = "";
  array[0] === array[0].toUpperCase()
    ? (givenSectionOfArray = alphabet
        .toUpperCase()
        .slice(
          alphabet.toUpperCase().indexOf(array[0]),
          alphabet.toUpperCase().indexOf(array[array.length - 1]) + 1
        ))
    : (givenSectionOfArray = alphabet.slice(
        alphabet.indexOf(array[0]),
        alphabet.indexOf(array[array.length - 1]) + 1
      ));

  //filter array and find missing letter
  return givenSectionOfArray
    .split("")
    .find((letter, index) => letter != array[index]);
}
