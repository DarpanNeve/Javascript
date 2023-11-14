const user = {
  username: "Darpan",
  price: 999,
  welcomeMessage: function () {
    console.log(`Welcome ${this.username} to our website`);
    // console.log(this);
  },
};
user.welcomeMessage();
user.username = "Darpanuser";
user.welcomeMessage();
// console.log(this);
const newuser = function () {
  let user1 = "darpan";
  //   console.log(this.user1);
};
newuser();
const newuser1 = () => {
  let user1 = "darpan";
  //   console.log(this.user1);
};
newuser1();
const addTwo = (a, b) => {
  return a + b;
};
const addTwo1 = (a, b) => a + b;
console.log(addTwo(2, 3));
