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

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
