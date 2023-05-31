// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False


function validBraces(braces){
  let stack = []
  let openingBraces = '([{'
  for(let item of braces){
    // if any brace from openingBraces === item then add it to arr
    if(openingBraces.includes(item)){
      stack.push(item)
    }
    // If its not opening brace then check if last brace in arr is opposite to the item 
    else if(item == ')' && stack.slice(-1) == '(' || item == ']' && stack.slice(-1) == '[' || item == '}' && stack.slice(-1) == '{'){
      stack.pop()
    } else {
      // if not return false
      return false
    }
  }
  return stack.length === 0
  }