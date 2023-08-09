let x;
let y;

function nineFields(size) {
  var fieldSize = size / 3;
  line(fieldSize, 0, fieldSize, size);
  line(fieldSize * 2, 0, fieldSize * 2, size);
  line(0, fieldSize, size, fieldSize);
  line(0, fieldSize * 2, size, fieldSize * 2);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    y = y - 50;
  } else if (keyCode === DOWN_ARROW) {
    y = y + 50;
  }else if (keyCode === LEFT_ARROW) {
    x = x - 50;
  }else if (keyCode === RIGHT_ARROW) {
    x = x + 50;
  }
  redraw();
}

function setup() {
  createCanvas(450, 450);
  textSize(25);
  x = 0;
  y = 0;
  noLoop();
}

function draw() {
  background(246, 222, 250);
  noFill();
  strokeWeight(3);
  nineFields(450);
  strokeWeight(1);
  push()
  for (let x = 0; x < 3; x++) {
    push()
    for (let y = 0; y < 3; y++) {
      nineFields(150);
      translate(0, 150);
    }
    pop()
    translate(150, 0);
  }
  pop();
  push();
  rect(x, y, 49, 49, 10);
}
