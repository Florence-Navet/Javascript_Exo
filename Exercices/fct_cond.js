/**declare une fct lePlusGrand() qui prend 3 arg et retourne
 * le plus grand
 * pas de Math.max()
 * obj utiliser des conditions
 * ex : (1, 2, 3)    -> 3
 *      (42, 1, -10) -> 42
 */

export const lePlusGrand = (nombre1, nombre2, nombre3) => {
  if (nombre3 >= nombre1 && nombre3 >= nombre2) {
    console.log("le plus grand nombre est :", nombre3);
    return nombre3;
  } else if (nombre2 >= nombre1 && nombre2 >= nombre3) {
    console.log("le plus grand nombre est :", nombre2);
    return nombre2;
  } else {
    console.log("le plus grand nombre est :", nombre1);
    return nombre1;
  }
};

/**
 * index.js
 * import { lePlusGrand } from "./App/fct_cond.js";
 * 
lePlusGrand(1, 2, 3);
lePlusGrand(42, 1, -10);
lePlusGrand(-127, 157, -18);
lePlusGrand(-199, -157, -55);
 * 
 */

// CORRECTION
// export function lePlusGrand(a, b, c) {
//   if (a >= b && a >= c) {
//     return a;
//   } else if (b >= c) {
//     return b;
//   } else {
//     return c;
//   }
// }
