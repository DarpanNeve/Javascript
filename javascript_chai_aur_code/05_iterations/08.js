const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

// console.log(sumWithInitial);
// Expected output: 10
const shoppingCart = [
  {
    name: "Phone",

    price: 699,
  },
  {
    name: "Televison",

    price: 1099,
  },
  {
    name: "Keyboard",

    price: 199,
  },
  {
    name: "Airpods",

    price: 199,
  },
  {
    name: "Laptop",

    price: 999,
  },
];
const final = shoppingCart.reduce((total, item) => {
  return total + item.price;
}, 0);
console.log(final);
