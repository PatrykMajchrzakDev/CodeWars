// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

//Better solution

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor(seconds / 60) % 60;
  let secs = seconds % 60;

  const pad = function (time) {
    return time < 10 ? "0" + time : time;
  };
  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

// function humanReadable(seconds) {
//   let hrs = 0;
//   let mins = 0;
//   let secs = 0;
//   if (seconds > 9 && seconds < 60) {
//     return `00:00:${seconds}`;
//   } else if (seconds < 10) {
//     return `00:00:0${seconds}`;
//   }
//   if (seconds > 59 && seconds < 3600) {
//     mins = seconds / 60;
//     secs = (mins % 1) * 60;
//     mins = Math.floor(mins);
//     secs = Math.floor(secs);
//   } else {
//     hrs = seconds / 3600;
//     mins = (hrs % 1) * 60;
//     secs = (mins % 1) * 60;
//     hrs = Math.floor(hrs);
//     mins = Math.ceil(mins);
//     secs = Math.round(secs);
//   }
//   hrs < 10 ? (hrs = `0${Math.floor(hrs)}`) : Math.floor(hrs);
//   mins < 10 ? (mins = `0${Math.floor(mins)}`) : Math.floor(mins);
//   secs < 10 ? (secs = `0${Math.round(secs)}`) : Math.round(secs);

//   return `${hrs}:${mins}:${secs}`;
// }
