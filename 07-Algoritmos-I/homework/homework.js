'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  
  // divisor: 2
  // 180 | 2
  // 90  | 2
  // 45  | 2
  // 15  | 3
  //  5  | 5
  //  1  | 1
  
  let factores = [1];
  let i = 2;

  while (num > 1) {
    if (num % i === 0) {
      factores.push(i);
      num /= i;
    }
    else {i++}
  }

  return (factores);
}



function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:


  /*for (var i = 1; i < array.length; i++) {
    let ab = i;
    let cd = (i-1);

    let arr1 = array[ab];
    let arr2 = array[cd];

    if (arr1 < arr2) {
    array.splice(cd, 1, arr1);
    array.splice(ab, 1, arr2);
    }

    if (arr1 < arr2){
    bubbleSort(array);
    };
  }
  return (array); */


  // Otra Solución, mas simple
  var flag = true;

  while (flag) {
    flag = false;
    for (let i = 0; i < array.length-1; i++)
      if (array[i] > array[i+1]) {
        let aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux;
        flag = true;
      }
    }
  return (array);
}



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // Tengo que buscar el numero menor en un array y sacarlo (guardarlo)
  // para compararlo con las posiciones que tiene detras para luego soltarlo
  // cuando llegue a posicio 0 o delante de un valor mas chico

  for (let i = 1; i < array.length; i++) {
    let j = i-1;
    let aux = array[i]

    while(j >= 0 && array[j] > aux) {
      array[j+1] = array[j];
      j--;
    }
    array[j+1] = aux;
  }
  return (array);
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // Tengo que buscar el numero menor en un array y devolverlo

  //        ----------

  // Sin usar el metodo slice  
  /*   let nuevo = [];
  let array1 = array;    // (mientras modifico array 1, al mismo tiempo tambien el array original) 
  let long = array.length
  
  while (nuevo.length < long) {
    let minimo = Math.min(...array1);
    let i = array1.indexOf(minimo);
    array1.splice(i,1,)
    nuevo.push(minimo);
  }

  return (nuevo);
  } */

  //        ----------

  // Usando el metodo slice
  let nuevo = [];
  let array1 = array.slice(); // Slice crea una copia del array original

  while (nuevo.length < array.length) {
    let minimo = Math.min(...array1);
    let i = array1.indexOf(minimo);
    array1.splice(i,1,)
    nuevo.push(minimo);
  }

  return (nuevo);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
