"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/


function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this._length = 0; // Se lo agrague al final porque no es necesaria
}

LinkedList.prototype.add = function (value) {
  let nodo = new Node (value);    // list.head = null (list = new LinkedList)
  let current = this.head;     // this apunta a la instancia a la que aplico el metodo (Instancia de LinkedList)
  // current ahora es un nodo (que lo modificaremos mas adelante)
  
  //Si es la primera invocación no tengo información en el head. Acá estoy en el caso de que no tengo asociado un head. Mi lista esta vacia: list => null
  if (!current) {    // (!current) = (current === null)
    this.head = nodo;
    this._length++;
    return nodo;
  }
  
  while (current.next){   // = while (current.next !== null)
    current = current.next;
  }
  // A partir de ahora el nodo pasa a llamarse current (Y a su vez este nodo en su propiedad next = null)
  
  current.next = nodo;    // currrent.next = nodo.next  --  next (propiedad del nodo)
  // aqui le decimos al penultimo nodo.next = nodo nuevo

  this._length++; 

  return nodo; // (Este return esta puesto para que funcione el test, porque la lista ya esta definida igual)
}



LinkedList.prototype.remove = function (){

  if (this.head === null) return (null);
  // if (this.head === _length) return (null);

  let actual = this.head;

  if (actual.next === null) {
    this.head = null;   // SI le pongo === no funciona:  this.head === null;
    this._length--;    // Cuando establezco valores utilizar 1 igual, cuando comparo son 2 o 3.
    return (actual.value);
  }
  
  while (actual.next.next) { //actual.next.next !== null
    actual = actual.next
  }
  
  let sig = actual.next;

  if (actual.next.next === null) {
    actual.next = null;   // SI le pongo === no funciona:  actual.next === null;
    this._length--;
  }
  
  return (sig.value);
}


LinkedList.prototype.search = function (vall){
  if(this.head === null) return (null);
  
  let actual = this.head;
  
  while (actual) {
    //actual: nodo= {value, next}
    if (actual.value === vall) {return (actual.value)}

    else if (typeof vall == 'function') {
      if (vall(actual.value)) { return (actual.value)} 
    }
  
    actual = actual.next
  }
  
  return (null);

}

// Otras practicas: 
// Lista 2 enlaces: es decir que tenga un prev y un next

// 1) Agregar un elemento al principio
// 2) Agregar un elemento al medio
// 2) Agregar un elemento segun condición
// 4) Agregar un elemento al final

// 1) Eliminar un elemento al principio
// 2) Eliminar un elemento al medio
// 2) Eliminar un elemento segun condición
// 4) Eliminar un elemento al final



/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

////  -------------------------------------


function HashTable() {
  this.table = new Array();
  this.numBuckets = 35;

}

HashTable.prototype.hash = function (num) {
  let suma = 0;

  for (let i=0; i < num.length; i++) {
  suma += num[i].charCodeAt(); 
  };

 return(suma % this.numBuckets);
};

HashTable.prototype.set = function (key, value) {
  if (typeof key !== 'string') {throw new TypeError('Keys must be strings')};
  
  let valorHash = this.hash(key);
  
  if (this.table[valorHash] === undefined) {
    this.table[valorHash] = {};
  }

  this.table[valorHash][key] = value; // No puedo: this.table[valorHash].key = value;
};

HashTable.prototype.get = function (key) {     // Si uso clave como nombre de mi parametro no aprueba el test
  let f = this.hash(key);
  return (this.table[f][key]);
};

HashTable.prototype.hasKey = function (clave) {
 
  let f = this.hash(clave);

  return (this.table[f].hasOwnProperty(clave));
  
  /* if (this.table[f][key] === clave) {return (true)}
  
  else {return (false)}; */
};





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
