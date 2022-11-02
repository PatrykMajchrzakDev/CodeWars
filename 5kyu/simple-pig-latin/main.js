// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  //arr of strings
  arr = str.split(" ");
  //change each item if its not punctuation
  newArr = arr.map((item) => {
    if (item === "!" || item === "?") {
      return item;
    } else {
      //get first letter, remove first letter, add first letter at the and and add 'ay'
      let firstLetter = item[0];
      return item.slice(1) + firstLetter + "ay";
    }
  });
  return newArr.join(" ");
}

// RegEx version

// function pigIt(str) {
//     return str.replace(/\w+/g, (w) => {
//       return w.slice(1) + w[0] + 'ay';
//     });
//   }
