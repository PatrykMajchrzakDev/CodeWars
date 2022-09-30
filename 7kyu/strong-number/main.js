function strong(n) {
  let arr = Array.from(String(n), Number);
  let result = 0;
  let count = 0;
  arr.forEach((item) => {
    for (let i = 1; i < item; i++) {
      count += i * i + 1;
    }
    console.log(count);
  });

  // return "STRONG!!!!" || "Not Strong !!" ;
}
