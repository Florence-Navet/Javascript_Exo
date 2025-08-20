// import { testFn } from "./App/object_prop_calc.js";

export function testFn(prop, valeur) {
  // Déclarez en dessous :
  const objet = {
    [prop]: valeur,
  };

  // Ne touchez pas au return :
  return objet;
}

console.log(testFn("âge", 24));
console.log(testFn("ville", "Arles"));
console.log(testFn("Race", "Berger Australien"));
console.log(testFn("Alive", true));
