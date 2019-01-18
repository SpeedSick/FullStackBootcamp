let table = $('table tr');

colorOne = 'rgb(255, 0, 0)';
colorTwo = 'rgb(0, 0, 255)';

let finish = false;
current = colorOne;
$('h3').text(playerOne + ' now is your move');

let getColor = function(r, c) {
  return table.eq(r).find('td').eq(c).find('button').css('background-color');
}

let setColor = function(r, c, color) {
  table.eq(r).find('td').eq(c).find('button').css('background-color', color);
}

let getRow = function(c) {
  for(let r = 5; r >= 0; --r) {
    console.log(getColor(r, c));
    if(getColor(r, c) != colorOne && getColor(r, c) != colorTwo)
      return r;
  }
  return -1;
}

let dx = [-1, -1, -1, 0, 0, 1, 1, 1];
let dy = [0, -1, 1, -1, 1, 0, -1, 1];

let check = function(r, c) {
  for(let dir = 0; dir < 8; ++dir) {

  }
}

let inside = function(r, c) {
  return 0 <= r && r < 6 && 0 <= c && c < 7;
}

let gameOver = function() {
  for(let r = 0; r < 8; ++r) {
    for(let c = 0; c < 8; ++c) {
      let col = getColor(r, c);
      for(let dir = 0; dir < 8; ++dir) {
        let x = r, y = c, cnt = 1;
        while(true) {
          x += dx[dir];
          y += dy[dir];
          if(!inside(x, y) || getColor(x, y) !== col) break;
          cnt++;
        }
        if(cnt >= 4 && (col === colorOne || col == colorTwo)) {
          if(col === colorOne) return playerOne;
          return playerTwo;
        }
      }
    }
  }
  return null;
}

let press = function(c) {
  if(finish) return;
  let r = getRow(c);
  if(r === -1) return;

  setColor(r, c, current);

  if(gameOver() !== null) {
    $('h3').text(gameOver() + " is won! Refresh the page for the new game!");
    finish = true;
    return;
  }

  if(current === colorOne) {
    current = colorTwo;
    $('h3').text(playerTwo + ' now is your move');
  }
  else {
    current = colorOne;
    $('h3').text(playerOne + ' now is your move');
  }

}

for(let i = 0; i < table.length; ++i) {
  for(let j = 0; j < table.eq(i).find('td').length; ++j) {
    table.eq(i).find('td').eq(j).find('button').on('click', function() {
      press(j);
    });
  }
}
