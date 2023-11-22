const languages = ["c++", "java", "python"];

// const value = languages.forEach((item) => {
//   console.log(item);
// });
// console.log(value);

const num = [1, , 3, 4, 5, 6, 7, 8, 9, 10];
const newNum = num.filter((item) => {
  return item > 4;
});
console.log(newNum);

arraynum = [];
num.forEach((item) => {
  if (item > 4) {
    arraynum.push(item);
  }
});
console.log(arraynum);
