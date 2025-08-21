/**
 *utiliser une fct creerMultiplicateur() prenant en argument
 une nouvelle fct fléchée et le multiplie par ce multiplicateur

 cette fonction permet ensuite de creer d'autre fct :
 - const doubler : creerMultiplicateur(2)
 - const tripler : creerMultiplicateur(3)
 - const quatrupler : creerMultiplicateur(4)
 */

export const creerMultiplicateur = (multi) => (nombre) => multi * nombre;

export const doubler = creerMultiplicateur(2);
export const tripler = creerMultiplicateur(3);
export const quadrupler = creerMultiplicateur(4);

/**
 * index.js
 * console.log(doubler(5));
console.log(tripler(10));
console.log(quadrupler(7));
 */
