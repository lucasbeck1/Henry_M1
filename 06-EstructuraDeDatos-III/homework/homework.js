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

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
