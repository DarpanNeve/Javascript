// singleton

// object literals
const mySym = Symbol("key1");
const user = {
  [mySym]: "myKey", //add any symbol as key
  name: "darpan",
  age: 33,
  loggedIn: false,
};
console.log(user["age"]);
console.log(user.age);

console.log(user[mySym]); // print the data whose symbol is added as key

user.email = "Darpan@chatgpt.com";
// Object.freeze(user);
user.email = "Darpan@microsoft.com";
console.log(user);
user.welcome = function () {
  console.log("Hello user");
};

user.welcome2 = function () {
  console.log(`Hello user ${this.age}`);
};
console.log(user.welcome());
console.log(user.welcome2());
