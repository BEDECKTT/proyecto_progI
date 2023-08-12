//esta es la matriz que representa los numeros que se escriben en el grid de sudoku
var field = [
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0]
];

//esta matriz indica el estado de cada celda en el grid
//0 es una celda vacia y un numero correcto
//1 es una celda con un numero escrito al comenzar el juego(no se debe de poder modificar)
//2 es una celda con un numero erroneo escrito.
var answers = [
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0]
];

var colors = ['#000000', '#6892fa', '#ff5733'];
var rows = [1,1,1,1,1,1,1,1,1];
var cols = [1,1,1,1,1,1,1,1,1];
var fams = [1,1,1,1,1,1,1,1,1];
var primes = [1,2,3,5,7,11,13,17,19,23]

//la funcion crea numeros aleatorios y hace la verificacion de filas, columnas y cajas usando numeros primos
function filling_field() {
  for (var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
      //crean un numero entre 0 y 10, para crear una probabilidad de que una casilla se llene con un numero
      var prob = Math.floor(Math.random() * 11);
      //esta decision indica que tiene una probabilidad de 4 en 10 de llenarse
      if (prob > 6){
        var found = false;
        var k = i + 1;
        var tmp1;
        var tmp2;
        if((k % 3) === 0){
          tmp2 = (k / 3) - 1;
        }else{
          tmp2 = (k - (k % 3)) / 3;
        }
        k = j + 1;
				if ((k % 3) === 0){
					tmp1 = (k / 3);
				}else{
					tmp1 = Math.floor((k + 3) / 3);
				}
				k = (tmp1 + (tmp2 * 3)) - 1;
				var found = false;
				var skipper = 1;
				while(found == false ){
					var n = Math.floor(Math.random() * 9) + 1;
					if((rows[i] % primes[n]) !== 0 && (cols[j] % primes[n]) !== 0 && (fams[k] % primes[n]) != 0){
						rows[i] *= primes[n];
            cols[j] *= primes[n];
            fams[k] *= primes[n];
            answers[i][j] = 1;
            field[i][j] = n;
						found = true;
					}
          //esta desicion es para evitar un ciclo infinito o uno muy largo, al ser un numero random no se garantiza que se va a crear el numero optimo y puede quedar
          //atrapado durante un largo tiempo encontranto un numero que no se repita
					if (skipper === 15){
						found = true;
					}
					skipper++;
				}
      }
    }
  }
  
}