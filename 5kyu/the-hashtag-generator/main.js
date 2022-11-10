// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  if (str.trim().length < 1) {
    return false;
  }
  let result = "#";
  str = str.split(" ");
  for (item of str) {
    if (item.length < 1) {
      continue;
    } else {
      //.toUpperCase() + s.slice(1) is to capitalize first letter
      result += item[0].toUpperCase() + item.slice(1);
    }
  }
  if (result.length > 140) {
    return false;
  } else {
    return result;
  }
}
