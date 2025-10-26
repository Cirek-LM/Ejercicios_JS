//Se pide realizar un algoritmo que lea dos números e indique el mayor, o si son iguales.
let prompt = require("prompt-sync")();
let a = Number(prompt("Introduzca a: "));

let b = Number(prompt("Introduzca b: "));

if (a < b) {
  console.log("el mayor es:", b);
} else if (a === b) {
  console.log("son iguales");
} else {
  console.log("el mayor es:", a);
}
