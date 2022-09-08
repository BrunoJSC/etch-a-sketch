let container = document.getElementById('container');
const btnClear = document.getElementById('clear');
const color = document.querySelector('select');

function draw(rows, columns) {
  container.style.gridTemplateRows = `repeat(${rows}, ${1}fr)`;
  container.style.gridTemplateColumns = `repeat(${columns}, ${1}fr)`;

  for(let i = 0; i < (rows * columns); i++) {
    let div = document.createElement('div');
    
    div.addEventListener('mouseover', () => {
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      
      div.style.backgroundColor = `${randomColor}`;
      div.style.backgroundColor = `${color.value}`;
    });
    container.appendChild(div);
  }
}

function updateGrid(value) {
  const p = document.createElement('p');
  p.innerHTML = `${value} X ${value}`;
  document.body.appendChild(p);
  draw(value, value);
}

function clearGrid(rows, columns) {
  container.innerHTML = " ";
}

console.log(draw());
