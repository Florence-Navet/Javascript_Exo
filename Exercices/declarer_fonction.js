/**
 * declarer un fct pairouImpair() qui retourne si le nb reçu
 * en argument est pair ou impair
 * ex d'entrée  -> ex de sortie
 *      (2)           pair
 *     (54)           pair
 *     (-3)           impair
 */

export function testFn(nombre) {
  // Déclarez en dessous :
  const pairOuImpair = Number.isInteger(nombre) && nombre % 2 === 0;

  return pairOuImpair;
}

/**
 * index.js
 * import { testFn } from "./App/declarer_fonction.js";

console.log(testFn(2));
console.log(testFn(54));
console.log(testFn(-3));
 */

//solution
export function pairOuImpair(nombre) {
  return nombre % 2 === 0 ? "pair" : "impair";
}
