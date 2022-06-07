var state = 'press-key';
var patron = [];
var level = 0;



/* variables titulo y colores*/
var title = document.getElementById('title');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var yellow = document.getElementById('yellow');
var red = document.getElementById('red');






/*creamos un array botón con todos los colores dentro*/
var button = [red, green, yellow, blue];

/*presionar tecla (key) o click (smartphone) para iniciar el juego*/
document.addEventListener('click', startGame);

/*evento click sobre cada botón de color*/
red.addEventListener('click', buttonPress);
blue.addEventListener('click', buttonPress);
yellow.addEventListener('click', buttonPress);
green.addEventListener('click', buttonPress);


/*funcion iniciar juego*/
function startGame() {
  /*validar si se hizo click para iniciar el juego*/
  if (state === 'press-key' || state === 'Game over') {
    newLevel() /*llamamos a la función nuevo nivel*/
    patron = [];
    level = 0;
    indexPlayerPatron = 0;
  };
};


/*creamos la función nuevo nivel*/
function newLevel() {
  state = 'waitting-patron';
  setTimeout(() => {
    level = level + 1;
    title.innerText = 'Nivel ' + level;
    /*creamos la variable siguiente color aleatorio*/
    var nextColor = Math.floor(Math.random() * 4);
    /*creamos la variable siguiente boton*/
    var nextButton = button[nextColor];
    /*llamo a la función iluminar boton*/
    lightButton(nextButton);
    patron.push(nextButton);
    indexPlayerPatron = 0;
    state = 'waitting-player';
  }, 700);
};

/*creamos la función iluminar boton*/
function lightButton(button) {
  button.classList.add('active');
  setTimeout(() => {
    button.classList.remove('active');
  }, 500);
};

function buttonPress(event) {
  if (state === 'waitting-player') {
    var button = event.target;
    if (button === patron[indexPlayerPatron]) {
      indexPlayerPatron =
        indexPlayerPatron + 1;
      lightButton(button);
      if (indexPlayerPatron === patron.length) {
        newLevel();
      }

    } else {
      state = 'gameover 👎';
      title.innerText = 'gameover 👎';
     
    }
  }
};


var restart = document.getElementById('restart');

restart.addEventListener('click', () => {
  state = 'press-key';
  patron = [];
  level = 0;
  indexPlayerPatron = 0;
});