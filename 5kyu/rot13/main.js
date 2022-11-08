// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  let newMessage = "";
  let alphabet = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  alphabet = alphabet[0].repeat(2) + alphabet[1].repeat(2);
  for (item of message) {
    let letterPosition = alphabet.indexOf(item);
    if (item.match(/\W/) || item.match(/[0-9/]/) || item.match(/_/)) {
      newMessage += item;
    } else {
      newMessage += alphabet[letterPosition + 13];
    }
  }
  return newMessage;
}

//["test", "grfg"], ["Test", "Grfg"], ["Codewars", "Pbqrjnef"], ["Ruby is cool!", "Ehol vf pbby!"], ["10+2 is twelve.", "10+2 vf gjryir."]
