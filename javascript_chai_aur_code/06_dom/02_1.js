document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  const parent = document.querySelector(".parent");
  button.addEventListener("click", () => {
    // console.log(parent);
    // console.log(parent.children);
    for (let i = 0; i < parent.children.length; i++) {
      console.log(parent.children[i].innerHTML);
      parent.children[i].style.color = "red";
    }
    console.log(parent.firstElementChild);
  });
});
