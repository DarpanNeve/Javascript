// we don't use var in regular coding because it has scope issue
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log(`Inner:${a}`);
}
console.log(a);
// console.log(b);
console.log(c);
function one() {
  function two() {
    const website = "youtube";
    console.log(website);
  }
  //   console.log(website); throws error as it is out of scope
  two();
}
// one();
