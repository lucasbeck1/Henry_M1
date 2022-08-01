'use strict'

function BinarioADecimal(num) {
  // tu codigo aca


  //     Metodo parseInt() agregando variables
  //let num1 = parseInt(num,2);
  //return num1;


  //     Metodo parseInt() return directo
  return parseInt(num,2);


  //     Metodo con Formula y bucles
  /* 
  let num1 = String(num)
  let num2 = [];

  for (let i=0; i < num1.length; i++) {
    num2.unshift(num1[i]);
  }

  // let num2 = num.slice().reverse().join();
  let suma = 0;

  for (let e=0; e < num2.length; e++) {
    suma += num2[e]*(2**e)
  }

  return (suma);
  */

  //     Metodo con Formula y bucles del profe
  /* 
  var res = 0;
  var pos = 0;

  for (let i = num.length-1; i < num1.length; i--) {
    res = res + num[i] * 2 ** pos;
    pos ++;
  }
  
  return (res);
  */

}



function DecimalABinario(num) {
  // tu codigo aca
  
  //      Metodo parseInt() agregando variables
  //let num1 = parseInt(num);
  //let num2 = num1.toString(2);
  //return num2;


  //     Metodo parseInt() return directo
  return parseInt(num).toString(2);
  


  //     Metodo con Formula y bucle do... while (No salió)
  /*
  let binreves = [];
  let resto = num;

  do {
  binreves.push(resto % 2)
  resto /= 2
  Math.floor(resto)
  } while (resto <= 1)
  
  let binario1 = binreves.slice();
  let binario2 = binario1.reverse()
  let binario3 = binario2.join();

  return (binario3);


  //     Metodo con Formula y bucle for (No salió)
  /*
  let binreves = [];
  let resto = num;


  for (let i = resto; i <= 1; i/2) {
  binreves.push(i % 2)
  Math.floor(i)
  }

  let binario1 = binreves.slice();
  let binario2 = binario1.reverse()
  let binario3 = binario2.join();

  return (binario3);
  */


  //     Metodo con Formulas Profe

  //num = Numero (Number)
  // 11 = 1 0 1 1
  // 11 -- 11/2 -- 5,5 -- 5 | 1
  // 5  -- 5/2  -- 2,5 -- 2 | 1
  // 2  -- 2/2  --  1  -- 1 | 0
  // 1  -- 1/2  -- 0,5 -- 0 | 1

  /*
   // (1)
  var rest = '';

  // while(condicion)
  // while (num >= 1)  {
  // rest = num % 2 + rest;
  // num = Math.floor(num/2);
  //}

  return (rest);


  // (2)
  var rest = '';

  while (num !== 0) {
    rest = num % 2 + rest;

      // Cuidado con poner rest + num % 2
      // Porque al ser un string si importa el orden de la suma
      // (no se estan sumando los numeros sino concatenando)

    num = Math.floor(num/2);
  }
  return (rest);
  */


  // (3)
  // let binario = [];
  
  //   while (num > 0) {
  //     binario.unshift(num % 2);
  //     num = Math.floor(num / 2);
  //   }
  
  //   return binario.join('')
  // }

}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}