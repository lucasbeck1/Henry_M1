'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length < 2) {return (array)};

  const pivot = array.shift();
  const left = [];
  const right = [];

  while (array.length) {
    const item = array.shift();
    (item < pivot) ? left.push(item) : right.push(item)
  };

  array = [].concat(quickSort(left), pivot, quickSort(right));
  return (array);
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length < 2) {return (array)};

  let middle = Math.floor(array.length / 2)
  let left = array.slice(0, middle)
  let right = array.slice(middle, array.length)

  array =[];

  left = mergeSort(left);
  right = mergeSort(right);

  while (left.length && right.length) {
    left[0] < right[0] ? array.push(left.shift()) : array.push(right.shift())
  }

  array = array.concat(left, right);
  return (array);
}


/* 

var arreglo = [4, 7, 1, 2, 10, 9, 3];
​
function quickSort(array) {
  //si el arreglo ya está ordenado, retornarlo
  if (array.length <= 1) return array;
​
  //crear una variable pivot que sea igual a array.length - 1
  var pivot = array[array.length - 1],
    //crear un nuevo arreglo para almacenar todos los valores menores al pivote = []
    left = [],
    //crear un nuevo arreglo para almacenar todos los valores mayores o iguales al pivote = [4, 1, 7, 2, 9, 10, 3, 2]
    right = [];
​
  // recorrer el arreglo elemento por elemento agregando cada elemento al sub-arreglo correspondiente
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);
  }
​
  // retornar el arreglo ordenado
  return quickSort(left).concat(pivot).concat(quickSort(right));
}
​
​
function mergeSort(array) {
  // si el arreglo tiene longitud 1, retornarlo
  if (array.length === 1) return array;
​
  // dividir el arreglo en partes iguales
  var mid = Math.floor(array.length / 2),
    left = array.slice(0, mid),
    right = array.slice(mid);
​
  return merge(mergeSort(left), mergeSort(right));
}
​
function merge(left, right) {
  var leftIndex = 0,
    rightIndex = 0,
    finalArray = [];
​
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      finalArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      finalArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
​
  return finalArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}
 */





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
