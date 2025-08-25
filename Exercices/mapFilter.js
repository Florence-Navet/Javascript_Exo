/**
 * creer une fonction filtreFemmesAjouteNomComplet() recevant un tableau de personnes celebres en argument
 * les objets sont de formes :
 * {prenom:'Alber',nom:'Einstein',genre:'masculin'}
 * La fonction doit filtrer les personnes célèbres de genre féminin
 * Elle doit ensuite ajouter à chaque objet le nom complet à partir du prénom et du nom
 *
 * OBJECTIF :
 * . creez et exportez une fct filtreFemmesEtAjouteNomComplet() qui reçoit un tableau en argument
 * .Filtrez les objets du tableau pour que seuls les éléments avec une clé genre ayant pour valeur "féminin" soient inclus
 * .Ajoutez sur tous les objets du tableau une propriété nomComplet qui comporte le prénom suivi d'un espace puis le nom
 */

export function filtreFemmesEtAjouteNomComplet(tableauTrie) {
  return tableauTrie
    .filter((personne) => personne.genre === "féminin")
    .map((personne) => ({
      nomComplet: `${personne.prenom} ${personne.nom}`,
      ...personne,
    }));
}

/**
 * index.js
 * const personnesCelebres = [
  { prenom: "Albert", nom: "Einstein", genre: "masculin" },
  { prenom: "Isaac", nom: "Newton", genre: "masculin" },
  { prenom: "Marie", nom: "Curie", genre: "féminin" },
  { prenom: "Max", nom: "Planck", genre: "masculin" },
  { prenom: "Simone", nom: "de Beauvoir", genre: "féminin" },
  { prenom: "Rosalind", nom: "Franklin", genre: "féminin" },
];

console.log(
  JSON.stringify(filtreFemmesEtAjouteNomComplet(personnesCelebres), null, 2)
);

 * 
 * 
 */
