// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let total = 0;
  str = str.split("");
  str.forEach((item) => {
    item === "a" || item === "e" || item === "i" || item === "o" || item === "u"
      ? (total += 1)
      : null;
  });
  return total;
}
