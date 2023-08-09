function nineFields(size) {
  var fieldSize = size / 3;
  line(fieldSize, 0, fieldSize, size);
  line(fieldSize * 2, 0, fieldSize * 2, size);
  line(0, fieldSize, size, fieldSize);
  line(0, fieldSize * 2, size, fieldSize * 2);
}

function setup() {
  createCanvas(450, 450);
  textSize(25);
}

function draw() {
  background(220);
  strokeWeight(3);
  nineFields(450);
  strokeWeight(1);
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
  for (x = 0; x < 9; x++) {
    push();
    for (y = 0; y < 9; y++) {
      //text(field[y][x] ? field[y][x] : '', 20, 35);
      translate(0, 50);
    }
    pop();
    translate(50, 0);
  }
  pop();
}
