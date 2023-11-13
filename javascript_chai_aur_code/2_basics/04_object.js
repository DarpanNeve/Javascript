const user = new Object();
// console.log(user);
user.key = 123;
user.name = "darpan";
user.isLoggedIn = true;
const newUser = {
  email: "darpanneve3@gmail.com",
  data: {
    username: {
      name: "Darpan",
      surname: "Neve",
    },
  },
};
// console.log(newUser.data.username.name);
// console.log(newUser);
// const object3 = Object.assign(user, newUser);
// console.log(object3);
// const object4 = Object.assign({}, user, newUser);
// console.log(object4);

// const obj3 = { ...user, ...newUser };
// console.log(obj3);
// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(user.hasOwnProperty("isLoggedIn"));

const course = {
  name: "youtube",
  price: 999,
  instructor: "username",
};
const { instructor: name1 } = course;
// console.log(instructor);
console.log(name1);
