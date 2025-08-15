/**
 * qlq soit la longueur de la carte bancaire, remplacez ts
 * les caracteres sauf les quatres derniers
 * export function testFn(cb) {
 * // Déclarez en dessous :
 *  let reponse = ...
 *
 *  // Ne touchez pas au return :
 * *  return reponse;
 *}
 *
 *
 * liste des objectifs:
 * - utiliser la methode slice() pour ne conserver que les 4 derniers
 * - utlisers padStart() pour masquer les autres caracteres de la carte qlq soit sa * * * longueur
 * ('30116613634425') ->  '**********4425'
  ('379517272367653') ->  '***********7653'
  ('5223112447929699') ->  '************9699'
 */

export function testFn(cb) {
  // Déclarez en dessous :
  const numeroCartes = cb;
  const quatreDerniersChiffres = numeroCartes.slice(-4);
  let reponse = quatreDerniersChiffres.padStart(numeroCartes.length, "*");

  // Ne touchez pas au return :
  return reponse;
}
/**
 * import { testFn } from "./App/app.js";
 * console.log(testFn("30116613634425"));
console.log(testFn("379517272367653"));
console.log(testFn("5223112447929699"));
 */
