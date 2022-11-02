// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens) {
  let stack = [];
  if (parens.length % 2 != 0 || parens[0] === ")" || parens[-1] === "(") {
    return false;
  }
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      stack.push("(");
    } else if (parens[i] === ")" && stack.length === 0) {
      return false;
    } else {
      stack.pop();
    }
  }
  return stack.length === 0;
}

//Others example 200iq
function validParentheses2(parens) {
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == "(") n++;
    if (parens[i] == ")") n--;
    if (n < 0) return false;
  }

  return n == 0;
}
