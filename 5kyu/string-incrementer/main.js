// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
  //gets only digits from the end of a string
  const lastDigits = (strng) => {
    let reversedArg = strng.split("").reverse().join("");
    let number = "";
    //go from last string item till no num
    for (let i = 0; i < reversedArg.length; i++) {
      if (!isNaN(reversedArg[i])) {
        //   console.log(reversedArg[i]);
        number = reversedArg[i] + number;
      } else {
        return `${number}`;
      }
    }
  };
  //returns number + 1 with prefixed zeros
  let returnIncrementedNumber = (lastDigits) => {
    let addOne = +lastDigits + 1;
    for (let i = 0 + String(addOne).length; i < lastDigits.length; i++) {
      addOne = "0" + addOne;
    }
    return addOne;
  };
  return (
    strng.substring(0, strng.length - lastDigits(strng).length) +
    returnIncrementedNumber(lastDigits(strng))
  );
}
