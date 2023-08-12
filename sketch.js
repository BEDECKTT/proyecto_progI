// run it and click on the sudoku to solve it
var stepx = 0;
var stepy = 0;

function nineFields(size) {
  var fieldSize = size / 3;
  line(fieldSize, 0, fieldSize, size);
  line(fieldSize * 2, 0, fieldSize * 2, size);
  line(0, fieldSize, size, fieldSize);
  line(0, fieldSize * 2, size, fieldSize * 2);
}

function keyPressed(){
  var i = stepx / 50;
  var j = stepy / 50;
  if ( keyCode === UP_ARROW ) {
    if ( stepy === 0 ) {
      stepy = stepy;
    } else {
      stepy = stepy - 50;
    }

  } else if ( keyCode === DOWN_ARROW ) {
    if ( stepy === 400 ) {
      stepy = stepy; 
    } else {
      stepy = stepy + 50;
    }
    
  } else if ( keyCode === LEFT_ARROW ) {
    if ( stepx === 0 ) {
      stepx = stepx;  
    } else {
      stepx = stepx - 50;
    }
    
  } else if ( keyCode === RIGHT_ARROW ) {
    if ( stepx === 400) {
      stepx = stepx;
    } else {
      stepx = stepx + 50;
    }
    
  } 

  if ( keyCode === 97 ) {
   field[j][i] = 1;
  } else if ( keyCode === 98 ) {
    field [j][i] = 2;
  } else if ( keyCode === 99 ) {
    field [j][i] = 3;
  } else if ( keyCode === 100 ) {
    field [j][i] = 4;
  } else if ( keyCode === 101 ) {
     field [j][i] = 5;
  } else if ( keyCode === 102 ) {
    field [j][i] = 6;
  } else if ( keyCode === 103 ) {
    field [j][i] = 7;
  } else if ( keyCode === 104 ) {
    field [j][i] = 8;
  } else if ( keyCode === 105) {
    field [j][i] = 9;
  }

}

function setup() {
  createCanvas(450, 450);
  textSize(25);
  filling_field();
}

function draw() {
  background(220);
  strokeWeight(3);
  nineFields(450);
  strokeWeight(1);
  //noFill();
  push()
  for (var x = 0; x < 3; x++) {
    push()
    for (var y = 0; y < 3; y++) {
      nineFields(150);
      translate(0, 150);
    }
    pop()
    translate(150, 0);
  }
  pop();
  push();
  strokeWeight(1);
  stroke(colors[1]);
  for (x = 0; x < 9; x++) {
    push();
    for (y = 0; y < 9; y++) {
      text(field[y][x] ? field[y][x] : '', 20, 35);
      translate(0, 50);
    }
    pop();
    translate(50, 0);
  }
  pop();
  stroke(0, 0, 0);
  strokeWeight(2.5);
  line(stepx, stepy, stepx + 49, stepy);
  line(stepx + 49, stepy, stepx + 49, stepy + 49);
  line(stepx + 49, stepy + 49, stepx, stepy +49);
  line(stepx, stepy + 49, stepx, stepy);
}