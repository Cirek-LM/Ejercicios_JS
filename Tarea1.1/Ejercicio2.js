//Se pide un algoritmo que lea dos números desde teclado, 
// calculando y escribiendo en pantalla el valor de su suma, resta, producto y división.
let prompt = require('prompt-sync')();
let a = Number(prompt('Introduzca a: '));

let b = Number(prompt('Introduzca b: '));

let suma = a+b;

let resta = a-b;

let multiplicación = a*b;

let division = a/b;

console.log("suma:",suma,"resta:",resta,"producto:",multiplicación,"division:",division)