matrix = document.querySelectorAll('td');

let changeContent = function(item) {
  console.log(item.textContent);
  if(item.textContent === 'X') item.textContent = 'O';
  else if(item.textContent === 'O') item.textContent = '';
  else item.textContent = 'X';
}

for(let i = 0; i < matrix.length; ++i) {
  matrix[i].addEventListener('click', function() {
    changeContent(matrix[i]);
  });
}

button = document.querySelector('#b');

let newGame = function() {
  matrix.forEach(function(item) {
    item.textContent = '';
  });
}

button.addEventListener('click', newGame);
