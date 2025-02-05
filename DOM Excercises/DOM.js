const container = document.querySelector("#container");

const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!";

const h3 = document.createElement("h3");
h3.setAttribute("style", "color : blue");
h3.textContent = "I'm a blue h3!";

container.appendChild(p);
container.appendChild(h3);

const div = document.createElement("div");
div.style.borderStyle = "solid";
div.style.borderColor = "black";
div.style.background = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const p1 = document.createElement("p");
p1.textContent = "ME TOO!";
div.appendChild(p1);

container.appendChild(div);