matrix = document.querySelectorAll('td');

let changeContent = function() {
  if(this.textContent === 'X') this.textContent = 'O';
  else if(this.textContent === 'O') this.textContent = '';
  else this.textContent = 'X';
}

matrix.forEach(function(item) {
  item.addEventListener('click', changeContent);
});

button = document.querySelector('#b');

let newGame = function() {
  matrix.forEach(function(item) {
    item.textContent = '';
  });
}

button.addEventListener('click', newGame);
