export function testFn(objet1, objet2, objet3) {
  // Déclarez en dessous :
  const objet = {
    ...objet1,
    ...objet2,
    ...objet3,
  };

  // Ne touchez pas au return :
  return objet;
}

/**
 *
 * utiliser spread ou object.assign() pour fusionner 3 objets dans un nouvel objet
 */

/**
 * const result = testFn({ a: -2 }, { a: 2 }, { b: 42 });
const result1 = testFn({ a: 1 }, { b: 2 }, { c: 3 });
console.log("Resultat de ma fusion", testFn(result));
console.log("Resultat de ma fusion", testFn(result1));
 */
