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

  for (var i=0; i < num1.length; i++) {
    num2.unshift(num1[i]);
  }

  // let num2 = num.slice().reverse().join();
  let suma = 0;

  for (var e=0; e < num2.length; e++) {
    suma += num2[e]*(2**e)
  }

  return (suma);
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
  


  //     Metodo con Formula y bucles (No salió)
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
  */

}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}