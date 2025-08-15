/**
 * comptez les nb de la phrase reçue
 * export function testFn(phrase) {
 *  // Déclarez en dessous :
 *  let reponse = ...
 *
 *  // Ne touchez pas au return :
 *  return reponse;
 * }
 *
 * objectif à remplir :
 * utiliser la methode split pour compter le nb de mot de * phrase.
 * n'oublier pas d'enlever les espaces au debut ou à la fin
 * de la phrase.
 * ('Un petit chat') -> 3
 * ('  Une phrase avec des espaces au début')-> 7
 *
 *
 */

export function testFn(phrase) {
  // Déclarez en dessous
  let reponse;
  if (phrase == null) {
    reponse = 0;
  } else {
    reponse = phrase.trim().split(/\s+/).length;
  }

  // Ne touchez pas au return :
  return reponse;
}

/**
 * import index.js
 * import { testFn } from "./App/app";

console.log(testFn("Un petit chat"));
console.log(testFn("  Une phrase avec des espaces au début"));

 */
