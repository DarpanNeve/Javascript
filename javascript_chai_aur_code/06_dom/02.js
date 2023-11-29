document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  const title = document.getElementById("title");
  const para = document.getElementById("para");
  const password = document.getElementById("password");
  const body = document.body;
  const tempClassList = document.getElementsByClassName("list-item");
  const convertedList = Array.from(tempClassList);
  button.addEventListener("click", () => {
    convertedList.forEach((item) => {
      item.style.color = "red";
      console.log(item.innerHTML);
    });
  });
});
