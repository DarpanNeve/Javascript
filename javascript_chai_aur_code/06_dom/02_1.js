document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  const parent = document.querySelector(".parent");
  button.addEventListener("click", () => {
    console.log(parent);
    console.log(parent.children);
  });
});
