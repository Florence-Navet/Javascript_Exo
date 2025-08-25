/**
 * Creez une fct qui prend un nb indéfini et retourne le plus grd nb
 * - utiliser l'operation rest(...) et une boucle pour itéter les arguments
 * - pas de Math.max()
 * OBJ :
 * - creez et exporter une fct plusGrandNombre() qui prend un nombre indéfini d'arguments
 * - utiliser une structure de controle et une boucle pour retourner le plus grand nombre
 */

export function plusGrandNombre(...nombres) {
  if (nombres.length === 0) {
    return undefined;
  }

  let max = nombres[0];

  for (let i = 1; i < nombres.length; i++) {
    if (nombres[i] > max) {
      max = nombres[i];
    }
  }
  return max;
}

/**
 * index.js
 * import { plusGrandNombre } from "./App/lePlusGrNb.js";

console.log(plusGrandNombre(3, 7, 2, 9, 5));
console.log(plusGrandNombre(1, 10, 15, 115, 0));
 */
