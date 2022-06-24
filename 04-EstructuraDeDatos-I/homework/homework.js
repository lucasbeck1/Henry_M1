'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

  
// Solución 1 - Calcada del Readme
/* 
function nFactorial(n, tot = 1) {

  if (n < 0 || n !== Math.round(n)) return ('Número no Natural')
  if (n === 1) return tot; 

  tot *= n;
  n -=1;

  return (nFactorial(n,tot))
}
 */



// Solución 2 - Propia

function nFactorial(n) {

  if (n < 0 || n !== Math.round(n)) {return ('Número no Natural')}
  else if (n === 0) {return 1}
  else if (n >= 1) {
    return (n * nFactorial(n-1))
  }
}


// Solucion 3 - Copiada del resumen
/* 
function nFactorial(n) {
	if(n > -1 && n < 2) {return 1};
	if(n < 0) {return 0};
	return n * nFactorial(n - 1);
}
 */

// Solucion 4 (Iterable - Propia)
/* 
function nFactorial(n) {
  Number(n)
  nEnt = Math.round(n);
  let contador = 1;
  
  if (n === nEnt && n > 0) { 
    for (let i = n; i > 0; i--) {
     contador *= i
    } }
  return (contador);
}

 */


/* 
nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/




// Solucion 1 Mix (mia - Profe)

function nFibonacci(n) {

if (n === 0) {return (n)}
else if (n === 1) {return (n)}
else {
return (nFibonacci(n-1) + nFibonacci(n-2))
}
}


// Solucion Profe
/*
function nFibonacci(n) {

  if (n >= 0 && n < 2) return n;
  return (nFibonacci(n-1) + nFibonacci(n-2))
  }
*/


/* 
// Solución Iterable - Propio

  function nFibonacci(n) {
  let arr = [0,1];
  
  if (n < 2) { return (arr[n])}

  for (let i = 2; i <= n; i++)
  arr.push(arr[i-1]+arr[(i-2)])
  return arr[n];
}

 */
// Solución tramposa

/* function nFibonacci(n) {
  let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  return arr[n];
} */



/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

//   Función constructora Propia
 
function Queue() {
  
  this.arr = [];

  this.enqueue = function (arg1) {
    this.arr.push(arg1);};

  this.dequeue = function () {
    //if (this.arr.lentgh === 0) return undefined;
    return this.arr.shift();};

  this.size = function () {
  return this.arr.length;}; // Recordar no poner parentesis en: .length() porque tira error}
}



// Función constructora correcta (Prototypes)
/*  
  function Queue() {
  this.arr = [];
  }

  Queue.prototype.enqueue = function (arg1) {
    this.arr.push(arg1);
  };
  Queue.prototype.dequeue = function () {
    //if (this.arr.lentgh === 0) return undefined;
    return this.arr.shift();
  };
  Queue.prototype.size = function () {
    return this.arr.length;
  };

 */

  //  Clase copiada del resumen
/* 
class Queue {
	constructor() {
		this.queue = [];
	}

	enqueue(element) {
		this.queue.push(element);
		return this.queue;
	}

	dequeue() {
    if (this.queue.length === 0) {return undefined}
    else {return this.queue.shift();}}
	
	size() {return this.queue.length;}
}
 */


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
