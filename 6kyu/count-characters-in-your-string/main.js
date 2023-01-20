// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  let obj = {};
  if (string.length === 0) {
    return {};
  } else {
    for (item of string) {
      if (obj.hasOwnProperty(item)) {
        obj[item] += 1;
      } else {
        obj[item] = 1;
      }
    }
  }
  return obj;
}

//Other good solution
function count(string) {
  var count = {};
  string.split("").forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}
