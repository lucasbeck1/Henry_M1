
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;                                 // x = 1
var a = 5;                             // a = 5
var b = 10;                            // b = 10
var c = function(a, b, c) {
  var x = 10;                          // x = 10
  console.log(x);  // Imprime:  10
  console.log(a);  // Imprime:  8                 
  var f = function(a, b, c) {
    b = a;                             // b = a
    console.log(b); // Imprime:  8
    b = c;                             // b = c
    var x = 5;
  }
  f(a,b,c);        
  console.log(b);  // Imprime:  9
}
c(8,9,10);                             // a=8, b=9, c=10 
console.log(b);  // Imprime:  10
console.log(x);  // Imprime:  1
```

```javascript
console.log(bar);  // Imprime:   undefined (ejecuta primero el console.log)
console.log(baz);  // Imprime:   Error (ejecuta primero el console.log)
foo();    // Imprime:  Hola! (Se fija primero en las functions)
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);  // Imprime:  Franco (si el valor es false imprime Tony)
```

```javascript
var instructor = "Tony";
console.log(instructor);  // Imprime:  Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);      // Imprime:  Franco
   }
})();
console.log(instructor);   // Imprime:  Tony (las funciones tiene otro scope, los if no)
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);  // Imprime:  The Flash
    console.log(pm);          // Imprime:  Reverse Flash
}
console.log(instructor);      // Imprime:  The Flash
console.log(pm);              // Imprime:  Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"                          //    2
"2" * "3"                        //    6
4 + 5 + "px"                     //  "9px"
"$" + 4 + 5                      //  "$45"
"4" - 2                          //    2
"4px" - 2                        //   Nan
7 / 0                            //  Infinity
{}[0]                            //   [0]
parseInt("09")                   //    9
5 && 2                           //    2
2 && 5                           //    5
5 || 0                           //    5
0 || 5                           //    0
[3]+[3]-[10]                     //    23        (Primero suma 3+3 "33" y luego le resta 10)
3>2>1                            //   false     (Primero compara (3 > 2) da por resultado true y luego compara el true > 1 )
[] == ![]                        //   true      
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);             // Imprime:  Undefined (console.log lo toma antes que var)
   console.log(foo());         // Imprime:  2 (Imprime el valor que retorna)

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

```javascript
function a() {
    console.log(global);      // Imprime: 'Hola!'   -  cuando se ejecuta la función por primera vez ya que var global, declarada abajo, hace hoisting
    global = "Hello!";        // luego global se reescribe
}

var global = "Hola!";

a(); //
console.log(global);          // Luego de ejecutarse la función a(), global === 'Hello!'
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);      // Imprime:   Undefined
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());    // Imprime:   'Aurelio De Rosa'
                                        // Estamos llamando una propiedad de un objeto (una funcion) Esta busca la propiedad en el objeto donde fue invocada
var test = obj.prop.getFullname;

console.log(test());                   // Imprime:   'Juan Perez'
                                       // La variable fue declarada con solo una propiedad del objeto, la cual copió, pero cuando necesita el this y no la encuentra se va al obj global
                        
``` 

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();    // Imprime: 1,4,3,2
               // El setTimeout se ejecuta despues del resto del código.
```
