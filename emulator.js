document.body.onload = makeDivs;
var divArray = new Array(100);

var memory = new Array(1024);
for (var k = 0; k < 1024; k++) {
  memory[k] = 0;
}

var acc = 0;

var LOAD = 1;
var STORE = 2;
var ADD = 3;
var SUB = 4;
var COMPARE = 5;
var GOTO = 6;
var SET_PIXEL = 7;

var program = [LOAD, 0, ADD, 1, STORE, 0, GOTO, 0];
var slot = 0;

function runOneInstruction() {
  console.log(slot);
  console.log(memory);
  var instruction = program[slot];
  var what, where, x, y;

  switch (instruction) {
    case LOAD:
      where = program[++slot];
      acc = memory[where];
      break;
    case STORE:
      where = program[++slot];
      memory[where] = acc;
      break;
    case ADD:
      acc += program[++slot];
      break;
    case SUB:
      acc -= program[++slot];
      break;
    case COMPARE:
      break;
    case GOTO:
      slot = program[++slot] - 1;
      break;
    case SET_PIXEL:
      x = memory[program[++slot]];
      y = memory[program[++slot]];
      divArray[y][x].style.backgroundColor = 'red';
      break;
  }
  slot++;
}

function makeDivs () {
  var outerWall = document.getElementById("outerWall");

  for(var r = 0; r < divArray.length; r++)
  {
    divArray[r] = new Array(100);
    var row = document.createElement("div");
    row.className = 'pixelRow';


    outerWall.appendChild(row);

    for(var c = 0; c < divArray[r].length; c++)
    {
      divArray[r][c] = document.createElement("div");
      divArray[r][c].className = 'pixelCol';
      divArray[r][c].style.backgroundColor = 'black';
      divArray[r][c].innerHTML = '&nbsp;';
      row.appendChild(divArray[r][c]);

    }
  }

  buttonClicks();
  setInterval(runOneInstruction, 100);
}
function buttonClicks () {
  for (var num = 1; num <= 4; num++) {
    console.log('setting button ' + num);
    var clicker = document.getElementById("button" + num);

    clicker.onmousedown = showNum;
    clicker.onmouseup = leaveNum;
  }
};

function showNum(event) {
  var clickedButton = event.target;
  var buttonNum = clickedButton.id[clickedButton.id.length - 1] - 1;
  divArray[0][buttonNum].style.backgroundColor = 'red';
}

function leaveNum(event) {
  var clickedButton = event.target;
  var buttonNum = clickedButton.id[clickedButton.id.length - 1] - 1;
  divArray[0][buttonNum].style.backgroundColor = 'black';
}
