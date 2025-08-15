/**
 * extraire extention fichier
 * En utilisant un regex avec un groupe capturant, récupérerez uniquement l'extension * * du fichier
 * l'extensionnp peut faire un nombre de caractere de 1 à n (pas de maximum)
 * ex :
 * ('MON-fichier123.png') -> png
 *('MON-fichier123.doc')  -> doc
 * ('fichier.jpeg')       -> jpeg
 */

export function testFn(fichier) {
  // Déclarez en dessous :
  const coupage = fichier.split(/\.(?=[^\.]+$)/);
  let reponse = coupage.length > 1 ? coupage[1] : "";

  // Ne touchez pas au return :
  return reponse;

  //   import { testFn } from "./App/app";

  // console.log(testFn("MON-fichier123.png"));
  // console.log(testFn("MON-fichier123.doc"));
  // console.log(testFn("fichier.jpeg"));
}
