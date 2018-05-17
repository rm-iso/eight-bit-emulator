document.body.onload = makeDivs;
var divArray = new Array(100);

var memory = new Array(1024);

var LOAD = 1;
var STORE = 2;
var ADD = 3;
var SUB = 4;
var COMPARE = 5;
var GOTO = 6;
var SET_PIXEL = 7;

var program = [ADD, 5, 3, SUB, 3, 2, STORE, 100, GOTO, 0];

function runProgram() {
  for (var slot = 0; slot < program.length; slot++) {
    var instruction = program[slot];

    if (instruction == ADD) {

    } else if (instruction == SUB) {

    } else if (instruction == LOAD) {

    }
  }
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
