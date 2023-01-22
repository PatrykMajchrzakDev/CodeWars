// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
//       assert.deepEqual(wave("two words"), result, "Should return: '"+result+"'");

function wave(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    } else {
      split = str.split("");
      split.splice(i, 1, split[i].toUpperCase());
      result.push(split.join(""));
    }
  }
  return result;
}
