// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b) {
  let result = "";
  const arr = [...arguments];
  for (item of arr) {
    //conditionals to not go over 255 or lower then 0
    item < 0 ? result : item;
    item > 255 ? (item = 255) : item;
    item === 0 ? (item = `0${item}`) : item;

    //test edge cases
    if (item.toString().includes(":") || item.toString(16).length === 1) {
      result += "0" + item.toString(16);
    } else {
      result += item.toString(16);
    }
  }
  return result.toUpperCase();
}
