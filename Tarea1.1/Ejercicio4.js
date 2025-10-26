//Solicita por teclado tres números;
// si el primero es negativo, muestra el producto de los tres y si no lo es, muestra la suma.
let prompt = require("prompt-sync")();
let a = Number(prompt("Introduzca a: "));

let b = Number(prompt("Introduzca b: "));
let c = Number(prompt("Introduzca c: "));

if (a < 0) {
  console.log("Su producto es:", a * b * c);
} else {
  console.log("Su producto es:", a + b + c);
}
