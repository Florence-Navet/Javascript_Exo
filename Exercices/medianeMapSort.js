/**
 *Ecrivez une fct obtenirMediane() recevant un tableau de notes
 la fct doit pour chaque tableau retourner la mediane du tableau de notes
  la mediane est la valeur qui separe la moitié inferieure de la moitié  superieur d'un ensemble
  pour calculer la mediane, il faut trier les donnees (les trier dans l'ordre ascendant)
  si le nb d'elements est impair, la mediane est le nombre qui se situe au milieu
  si le nombre d'elements est pair, la mediane est la moyenne des deux valeurs du milieu

  OBJECTIFS
  . creer et exporter une fonction obtenirMediane() recevant un tableau en argument
  . iterer sur chaque tableau en utilisant la méthode map()
  . trouvez l'index de l'élément au milieu du tableau. si le nombre d'élément est pair trouvez la position de la premiere des deux valeurs du milieu
  . copiez et triez le tableau des notes avec les méthodes slice et sorts()
  . utilisez l'operateur % pour déterminer si le nombre d'elements dans le tableau est pair ou impair
  . si le nombre d'elements est impair, retournez la valeur du milieu du tableau
  . si le nombre est pair, retournez la moyenne des deux valeurs du milieu du tableau
 */

export function obtenirMediane(tableauNotes) {
  return tableauNotes.map((notes) => {
    const notesTriees = notes.slice().sort((a, b) => a - b);
    //trouver l'index
    const trouverIndex = notesTriees.length;
    const milieu = Math.floor(trouverIndex / 2);
    if (trouverIndex % 2 === 1) {
      return notesTriees[milieu];
    } else {
      return (notesTriees[milieu - 1] + notesTriees[milieu]) / 2;
    }
  });
}

/**
 * import { obtenirMediane } from "./App/medianeMapSort.js";

const notesJulien = [
  [2, 14, 16, 15, 5],
  [7, 2, 4],
];

const notesTristan = [
  [12, 14, 12, 13],
  [2, 14, 1, 5],
];

console.log(obtenirMediane(notesJulien));
console.log(obtenirMediane(notesTristan));

 */
