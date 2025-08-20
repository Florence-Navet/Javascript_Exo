/**
 * verifie l'existence et le type de la propriété de l'objet
 * utiliser typeof pour verifier que les proprietes prenom et nom sont des chaine de caracteres
 */

export function testFn(objet) {
  // Déclarez en dessous :
  const resultat =
    typeof objet.prenom === "string" && typeof objet.nom === "string";

  // Ne touchez pas au return :
  return resultat;
}

/**
 * 
const personne = { firstname: "Jean", lastname: "Bob" };
console.log("type de personne", testFn(personne));

const personne1 = { firstname: 42, lastname: "Dupont" };
console.log("type de personne1", testFn(personne1));

const personne2 = { firstname: "Jean", lastname: 72 };
console.log("type de personne2", testFn(personne2));
 */
