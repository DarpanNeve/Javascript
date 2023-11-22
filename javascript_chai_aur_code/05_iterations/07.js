const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const num2 = num.map((item) => {
//   return item + 2;
// });

const newNum = num
  .map((item) => item + 10)
  .map((item) => item * 2)
  .filter((item) => item > 30);
console.log(newNum);
