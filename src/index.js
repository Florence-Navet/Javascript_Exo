// import { obtenirMediane } from "./App/medianeMapSort.js";

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
