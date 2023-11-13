function hello(new1) {
  console.log(new1);
  console.log("d");
  console.log("a");
}
hello("hello");
function hello1(
  new1 = "for default value and if no parameter is there the things are undefined"
) {
  return `${new1} has used function`;
}
const hellonew = hello1("darpan");
console.log(hello1("darpan"));
console.log(hello1());

// Shopping cart example
function calculateCartPrice(...num1) {
  return num1;
}

calculateCartPrice(400, 200, 300);
