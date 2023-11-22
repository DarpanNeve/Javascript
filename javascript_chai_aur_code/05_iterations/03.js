// Maps

const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

// console.log(map1.get("a"));
// Expected output: 1

map1.set("a", 97);

// console.log(map1.get("a"));
// Expected output: 97

// console.log(map1.size);
// Expected output: 3

map1.delete("b");

// console.log(map1.size);
// Expected output: 2

for (let [key, value] of map1) {
  //   console.log(`${key} = ${value}`);
}

const myObj = {
  a: 1,
  b: 2,
  c: 3,
};

// for (let [key, value] of Object.entries(myObj)) {
//     // console.log(`${key} = ${value}`);
// }
