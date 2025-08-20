/**
 * copiez en profondeur l'objet recu dans une variable copie
 * entree:({ a: 1, b: 42 }
 * sortie :{ a: 1, b: 42 }
 */

export function testFn(objet) {
  // Déclarez en dessous :
  const copie = JSON.parse(JSON.stringify(objet));

  // Ne touchez pas au return :
  return copie;
}

/**
 * const original = { a: 1, b: 42 };
const copie = testFn(original);
console.log("objet original", testFn(original));
console.log("copie", testFn(copie));

 */
