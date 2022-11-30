// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = (s) => {
  s = s.split(" ");
  newArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      newArr.push(s[i]);
    }
  }
  return newArr.join(" ");
};

//clever
function removeConsecutiveDuplicates(str) {
  return str
    .split(" ")
    .filter((word, index, arr) => word !== arr[index + 1])
    .join(" ");
}
