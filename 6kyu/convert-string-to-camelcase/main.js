// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
// });

function toCamelCase(str) {
  //str.replace(/[_-]\w/gi, gets matched element for example '-s' and replaces it with character at index 1 of matched element but uppercased
  return str.replace(/[_-]\w/gi, (match) => match[1].toUpperCase());
}
