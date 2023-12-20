const div = document.createElement("div");
console.log(div);
div.className = "main";
div.id = Math.random() * 1000;
div.setAttribute("title", "Hello");
div.style.backgroundColor = "red";
div.style.width = "100px";
div.innerHTML = "<h1>Hello</h1>";
document.body.appendChild(div);
