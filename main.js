const container = document.getElementById("container");

function random(num) {
  return Math.floor(Math.random() * (num + 1));
}

let user = +prompt('0');
function createDiv(n) {
  const div = document.createElement("div");
  const randColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  
  div.style.backgroundColor = randColor;

  container.appendChild(div);
  container.style.gridTemplateColumns = `repeat(${n}, ${1}fr)`;
  container.style.gridTemplateRows = `repeat(${n}, ${1}fr)`;
}

container.addEventListener("mouseover", () => {createDiv(user)});
