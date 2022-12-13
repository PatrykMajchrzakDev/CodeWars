// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// const Test = require('@codewars/test-compat');

// describe('Simple Tests', function() {
//   it('should handle simple tests', function() {
//     Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
//     Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
//     Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
//   });
// });

function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  if (s.length === 0) {
    return "";
  }
  for (item of [...str]) {
    if (str.indexOf(item) === str.lastIndexOf(item)) {
      return s[str.indexOf(item)];
    }
  }
  return "";
}
