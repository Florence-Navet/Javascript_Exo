/**fonction de decomposition du json */
export function testFn(personne) {
  // Déclarez en dessous :
  const {
    familly: {
      father: { firstname: prenom, lastname: nom },
    },
  } = personne;

  // Ne touchez pas au return :
  return { prenom, nom };
}

/**
 * APPEL index.js
 * import { testFn } from "./App/affectation_decomposition.js";
 * 
 * const personne = {
  familly: {
    father: {
      firstname: "jean",
      lastname: "Valjean",
    },
  },
};

console.log(testFn(personne));
 *
 */
