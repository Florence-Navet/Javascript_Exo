/**
 *creer un fct obtenirMoyenne() qui reçoit un tableau de tableau en argument
 dans chaque tablea se trouve un certain nb de notes sur 20
 la fct doit retourner la moyenne des notes arrondie à une décimale à la plus proche

 OBJECTIF
 . creez et exporter une fonction obtenirMoyenne() qui reçoit un tableau de tableaux en argument
 . utilisez les méthodes map() et reduce() pour calculer la moyenne de chaque tableau
 . utilisez la méthode Math.round() pour arrondir la moyenne à une décimal  la plus proche après la virgule

 ex entrée : 
 *([
  [12, 14, 16, 10, 5],
  [7, 2, 4],
])

ex sortie : 
[11.4, 4.3]
 */

export function obtenirMoyenne(tableauMoyenne) {
  return tableauMoyenne.map((notes) => {
    const somme = notes.reduce((acc, notes) => acc + notes, 0);
    const moyenne = somme / notes.length;
    return Math.round(moyenne * 10) / 10;
  });
}

/**
 * import { obtenirMoyenne } from "./App/moyenne_mapReduce.js";
 * index.js
 * const notes = [
  [12, 14, 16, 10, 5],
  [7, 2, 4],
];

console.log(obtenirMoyenne(notes));

 */
