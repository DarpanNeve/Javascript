document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  const title = document.getElementById("title");
  const body = document.body;

  button.addEventListener("click", () => {
    title.innerHTML = "Hi! From \n JS";
    title.style.color = "red";
    body.classList.toggle("bg-black");
    // body.classList.toggle("heading");
    //it shows the only visiblle content
    title.innerText;

    //it shows the actual content which can be hidden
    title.textContent;
    //gives the data of inner html of the element
    title.innerHTML;

    //Query selector and query selector all
    console.log(document.querySelector("#title"));
    console.log(document.querySelectorAll("#title"));
    console.log(document.querySelector(".heading"));
    console.log(document.querySelectorAll(".heading"));
    console.log(document.querySelector("h1"));
    console.log(document.querySelectorAll("h1"));
  });
});
