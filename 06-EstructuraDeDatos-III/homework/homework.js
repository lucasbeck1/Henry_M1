"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function() {
  if (this.left === null && this.right === null) {return (1)};

  if (this.left !== null && this.right === null) {return (1 + this.left.size())};

  if (this.left === null && this.right) {return (1 + this.right.size())};

  if (this.left !== null && this.right !== null) {return (1 + (this.left.size()) + (this.left.size()))};

}

BinarySearchTree.prototype.insert = function(value) {
 
  if (value > this.value) {
    if (this.right === null) {
    this.right = new BinarySearchTree(value);
    }
    else {
      this.right.insert(value);
    }
  }

  else {
    if (this.left === null) {
    this.left = new BinarySearchTree(value);
    }
    else {
      this.left.insert(value);
    }
  };

};


BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {return (true)}

  else if (value <= this.value) {
    if (this.left === null) {return (false);}
    else {return (this.left.contains(value));};
  }

  else if (value > this.value) {
    if (this.right === null) {return (false);}
    else {return (this.right.contains(value));};
  }
};


BinarySearchTree.prototype.depthFirstForEach = function(f, orden) {
  if (orden === "pre-order"){
    // root - izq - der
    //if (this.value) {f(this.value)}; ???????
    f(this.value);
    if (this.left) {this.left.depthFirstForEach(f,orden)};
    if (this.right) {this.right.depthFirstForEach(f,orden)};
  }
  
  else if (orden === "post-order"){
    // izq - der - root
    if (this.left) {this.left.depthFirstForEach(f,orden)};
    if (this.right) {this.right.depthFirstForEach(f,orden)};
    f(this.value);
  }
  
  else {
    // izq - root -der
    if (this.left) {this.left.depthFirstForEach(f,orden)};
    f(this.value);
    if (this.right) {this.right.depthFirstForEach(f,orden)};
  }
};


BinarySearchTree.prototype.breadthFirstForEach = function(f, array) {

if (array === undefined) {array = [];};

 if (this.left) {array.push(this.left)}
 if (this.right) {array.push(this.right)}

 f(this.value);

 if (array.length > 0) {
  array.shift().breadthFirstForEach(f, array);
 }

};



// Con indicaciones
/* 

"use strict";
​
/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
​
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.

​
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
​
BinarySearchTree.prototype.size = function () {
  if (this.right === null && !this.left) return 1;
  if (this.right === null && this.left !== null) return 1 + this.left.size();
  if (this.right !== null && !this.left) return 1 + this.right.size();
  if (this.right !== null && this.left !== null)
    return 1 + this.left.size() + this.right.size();
};
​
BinarySearchTree.prototype.insert = function (value) {
  // comparar el valor a agregar con la raíz del árbol
​
  // si el nuevo valor es mayor al valor de la raíz, evaluar si la raíz tiene un nodo a la derecha
  if (this.value < value) {
    if (this.right !== null) {
      // si tiene, tomar el nodo de la derecha como nueva raíz, y repetir el proceso
      this.right.insert(value);
    } else {
      // si no tiene, crear un nuevo nodo con el valor a agregar y agregarlo a la derecha de la raíz
      this.right = new BinarySearchTree(value);
    }
  }
​
  // si el nuevo valor es menor al valor de la raíz, evaluar si la raíz tiene un nodo a la izquierda
  if (this.value > value) {
    if (this.left !== null) {
      // si tiene, tomar el nodo de la izquierda como nueva raíz, y repetir el proceso
      this.left.insert(value);
    } else {
      // si no tiene, crear un nuevo nodo con el valor a agregar y agregarlo a la izquierda de la raíz
      this.left = new BinarySearchTree(value);
    }
  }
};
​
BinarySearchTree.prototype.contains = function (value) {
  //comparar el valor recibido por parámetro con el valor del árbol
  //si son iguales retornar true
  if (this.value === value) return true;
  //si el valor recibido es mayor, evaluar si existe otro arbol a la derecha
  if (this.value < value) {
    //si no existe un árbol a la derecha, retornar false
    if (this.right === null) return false;
    //si existe, repetir el proceso sobre el árbol de la derecha
    else return this.right.contains(value);
  } else {
    //si el valor recibido es menor, evaluar si existe otro arbol a la izquierda
    //si no existe un árbol a la izquierda, retornar false
    if (this.left === null) return false;
    //si existe, repetir el proceso sobre el árbol de la izquierda
    else return this.left.contains(value);
  }
};
​
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  // evaluar el parametro order
  switch (order) {
    case "post-order":
      // si order === 'post-order' recorrer el árbol invocando al callback primero en su izquierda (si existe), luego en su derecha (si existe), y último en su raíz
      if (this.left) this.left.depthFirstForEach(cb, order);
      if (this.right) this.right.depthFirstForEach(cb, order);
      cb(this.value);
      break;
    case "pre-order":
      // si order === 'pre-order' recorrer el árbol invocando al callback primero en su raíz, luego en izquierda, y por último en su derecha
      cb(this.value);
      if (this.left) this.left.depthFirstForEach(cb, order);
      if (this.right) this.right.depthFirstForEach(cb, order);
      break;
    default:
      // si order === 'in-order' U order no está definido, recorrer el árbol invocando al callback primero en la izquierda, luego en la raíz, por último en la derecha
      if (this.left) this.left.depthFirstForEach(cb, order);
      cb(this.value);
      if (this.right) this.right.depthFirstForEach(cb, order);
  }
};
​
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  //si existe un nodo a la izq, agregarlo al arreglo
  if (this.left) array.push(this.left);
  //si existe un nodo a la der, agregarlo al arreglo
  if (this.right) array.push(this.right);
  //invocar el callback sobre el nodo raíz
  cb(this.value);
  //si hay nodos en el arreglo, tomar el primero y repetir el proceso, pasando el arreglo por parámetro
  if (array.length) array.shift().breadthFirstForEach(cb, array);
};
 */



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
