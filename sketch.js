var stepx = 0;
var stepy = 0;
var cuadros = 50;

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
  var valuk  = keyCode - 96;

  if ( keyCode === UP_ARROW ) {
    if ( stepy === 0 ) {
      stepy = stepy;
    } else {
      stepy = stepy - cuadros;
    }

  } else if ( keyCode === DOWN_ARROW ) {
    if ( stepy === 400 ) {
      stepy = stepy; 
    } else {
      stepy = stepy + cuadros;
    }
    
  } else if ( keyCode === LEFT_ARROW ) {
    if ( stepx === 0 ) {
      stepx = stepx;  
    } else {
      stepx = stepx - cuadros;
    }
    
  } else if ( keyCode === RIGHT_ARROW ) {
    if ( stepx === 400) {
      stepx = stepx;
    } else {
      stepx = stepx + cuadros;
    }
    
  }
  if (valuk > 0 && valuk < 10){
    if (field[j][i] !== valuk){
      if (answers[j][i] !== 2 ){
        var tmp = creating_families(j , i);
        var num = field[j][i];
        var k = checking_val(j , i, valuk);
        fams[tmp] = fams[tmp] / primes[num];
        fams[tmp] = fams[tmp] * primes[valuk];
        cols[i] = cols[i] / primes[num];
        cols[i] = cols[i] * primes[valuk];
        rows[j] = rows[j] / primes[num];
        rows[j] = rows[j] * primes[valuk];
        answers[j][i] = k;
        field[j][i] = valuk;
      }
    }
  }
}

function mouseClicked(){
  stepx = mouseX - (mouseX % cuadros);
  stepy = mouseY - (mouseY % cuadros);
  
}

function setup() {
  var cnv = createCanvas(450, 450);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  textSize(25);
  filling_field();
}

function draw() {
  background('#fff');
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
  strokeWeight(1);
  for (x = 0; x < 9; x++) {
    push();
    for (y = 0; y < 9; y++) {
      var col = answers[y][x];
      stroke(colors[col]);
      text(field[y][x] ? field[y][x] : '', 20, 35);
      translate(0, cuadros);
    }
    pop();
    translate(50, 0);
  }
  pop();
  stroke(0, 0, 0);
  strokeWeight(2.5);
  line(stepx, stepy, stepx + (cuadros - 1), stepy);
  line(stepx + 49, stepy, stepx + (cuadros), stepy + 49);
  line(stepx + 49, stepy + 49, stepx, stepy +49);
  line(stepx, stepy + 49, stepx, stepy);
}