// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5         IV  4
// X          10
// L          50        XL  40
// C          100
// D          500       CD  400
// M          1,000     DM  900
// Remember that there can't be more than 3 identical symbols in a row.

function solution(number) {
  const thousands = ["", "M", "MM", "MMM"];
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  const thousandsDigit = Math.floor(number / 1000);
  const hundredsDigit = Math.floor((number % 1000) / 100);
  const tensDigit = Math.floor((number % 100) / 10);
  const onesDigit = number % 10;

  return (
    thousands[thousandsDigit] +
    hundreds[hundredsDigit] +
    tens[tensDigit] +
    ones[onesDigit]
  );
}
