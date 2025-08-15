export const blabla = "Je m'appelle Chouquette";
/**
 * mettre le 'reçu' en Title case : premiere lettre en majuscule
 * Code de départ :
 *export function testFn(chaine) {
 *  // Déclarez en dessous :
 *
 *  // Ne touchez pas au return :
 *  return chaine;
 *}
 *
 * Liste des objectifs :
 * - modifier le reçu dans chaine pour mettre premiere lettre en majuscule
 * - modifier le rçu pour mettre toutes les autres lettres en minustres
 * exemple :
 * ('chat') -> Chat
 * ('TEST') -> Test
 * ('Hello') -> Hello
 */

export function testFn(chaine) {
  // Déclarez en dessous :
  if (chaine == null) {
    chaine = "";
  } else {
    chaine = String(chaine);
    let texte = "";
    for (let i = 0; i < chaine.length; i++) {
      if (i === 0) {
        // accents gérés correctement
        texte += chaine[i].toUpperCase();
      } else {
        texte += chaine[i].toLowerCase();
      }
    }
    chaine = texte;
  }

  // Ne touchez pas au return :
  return chaine;
}

/**
 * import pour l'index.js
 * import { blabla, testFn } from "./App/app.js";
console.log(blabla);

console.log(testFn("chat"));
console.log(testFn("TEST"));
console.log(testFn("Hello"));
console.log(testFn("eCOle"));

/  */
