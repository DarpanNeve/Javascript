const myObj = {
  a: 1,
  b: 2,
  c: 3,
};

//this works
for (key in myObj) {
  console.log(`${key} = ${myObj[key]}`);
}
