let L = [1, 1, -1];
inviteMoreWomen(L);

function inviteMoreWomen(arr) {
  let total = arr.reduce((prev, curr) => prev + curr, 0);
  console.log(total);
  if (total === 0 || total < 0) {
    return false;
  } else {
    return true;
  }
}
