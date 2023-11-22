const languages = ["c++", "java", "python"];

// languages.forEach(function (language) {
//   console.log(language);
// });
// languages.forEach((language) => {
//   console.log(language);
// });

languages.forEach((item, index, array) => {
  console.log(item, index, array);
});
