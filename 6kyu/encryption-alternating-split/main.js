// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

// describe("Solution", function(){
//     it("EncryptExampleTests", function(){
//       Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
//       Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
//       Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
//       Test.assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");

//   describe("Solution", function(){
//     it("DecryptExampleTests", function(){
//       Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
//       Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
//       Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
//       Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");

function encrypt(text, n) {
  if (text === null) {
    return null;
  }
  if (text.length < 1 || n < 0) {
    return text;
  }
  odd = "";
  even = "";
  for (let i = 0; i < n; i++) {
    i === 0 ? text : (text = odd + even);
    odd = "";
    even = "";
    for (let j = 0; j < text.length; j++) {
      if (j % 2 === 0) {
        even += text[j];
      } else {
        odd += text[j];
      }
    }
    text = odd + even;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join("");
  }
  return encryptedText;
}
