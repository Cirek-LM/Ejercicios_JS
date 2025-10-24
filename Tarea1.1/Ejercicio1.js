//Lee desde entrada dos variables numéricas A y B. 
// Con ellas se pide realizar un algoritmo que intercambie los valores de ambas variables y muestre cuánto valen al final las dos variables.
let prompt = require('prompt-sync')();

let a = prompt('Introduzca a');

let b = prompt('Introduzca b');
let bTemporal=b;
b=a;
a=bTemporal;

console.log(`a=${a}, b=${b}`);
