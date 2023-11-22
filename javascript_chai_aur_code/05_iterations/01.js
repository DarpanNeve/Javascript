const array = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  // console.log(element);
}

for (let i = 0; i < 10; i++) {
  // console.log(`outer loop ${i}`);
  for (let j = 0; j < array.length; j++) {
    // console.log(`inner loop ${j} and outer loop ${i}`);
  }
}
