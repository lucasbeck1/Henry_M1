const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function(array) {
    // Tu código aca:
    let arrayMod = array.join().split(',')
    return (arrayMod);
}






// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total
// Tener en vuenta que el ultimo objeyo anidado {a:1} esta dentro de un array por eso no cuenta en este ejemplo

var countProps = function(obj) {
    // Tu código aca:

    let valores = Object.values(obj);
    let suma = valores.length;
    
    for (let i = 0; i < valores.length; i++) {
        if (typeof (valores[i]) === 'object' && (Array.isArray(valores[i])) === false) {
            // Descarte los array porque el typeof no los diferencia de los objetos
            suma += countProps(valores[i]);
        }
    }

    return(suma);

}







// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function(){
    // Tu código aca:

}










// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function(queueOne, queueTwo) {
    // Tu código aca:

    let queueTree = new Queue();
    
    let num1 = queueOne.length;
    let num2 = queueTwo.length;

    if (num2 > num1) {num1 = num2}
    
    for (let i = 0; i < num1; i++) {
        queueTree.enqueue(queueOne[i]);
        queueTree.enqueue(queueTwo[i]);
    }

    return (queueTree);
}










// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo: 
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function(multiplier) {
    // Tu código aca:
    
    // Funcion genera: [num*0, num*1, num*2, num*3]
    let arrayMul = [];
    for (let i = 0; i < 11; i++) {
        arrayMul.push(multiplier * i)
    }

    return (arrayMul);
}









// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function() {
    // Tu código aca:
    let suma = this.value

    if (this.left) {suma += (this.left.sum())};
    if (this.right) {suma += (this.right.sum())}; 


//Curiosidad: si no coloco el igual antes de la suma, no se suman los valores porque no se guarda en la variable suma, es decir, en el if si vamos a hacer la operación suma pero luego cuando le pidamos el valor de la variable, esta va a ser igual que su valor guardado:
//  if (this.left) {suma + (this.left.sum())};
//  if (this.right) {suma + (this.right.sum())};

    return (suma);
}

module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}