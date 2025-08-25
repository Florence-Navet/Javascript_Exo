/**
 * creer une fct compterElements() recevant un tableau en param
 * fct retournant un obj qui comporte en clés les chaines de caracteres du tableau et en valeurs le nb d'occurences du tableau
 *
 * OBJECTIFS :
 * . creer et exporter une fct compterElements() recevant un tableau en argument
 * . la fct doit retourner un obj qui comporte une clé unique pour chaque element du tableau et en valeur le nb de fois que cet element est contenu dans le tableau
 *
 * ex :
 * [
  'veste',
  'clé',
  'verre',
  'chien',
  'biberon',
  'chien',
  'veste',
  'clé',
  'chien',
]

sortie : 
{
  veste: 2,
  clé: 2,
  verre: 1,
  chien: 3,
  biberon: 1,
}
 */

// export function compterElements(quantiteElements) {
//   const compteur = {};

//   for (const item of quantiteElements) {
//     if (compteur[item]) {
//       compteur[item]++;
//     } else {
//       compteur[item] = 1;
//     }
//   }
//   return compteur;
// }

export function compterElements(tabWords) {
  return tabWords.reduce((acc, word) => {
    if (word !== " ") {
      if (!acc[word]) {
        acc[word] = 0;
      }
      acc[word] += 1;
    }
    return acc;
  }, {});
}

/**
 * index.js
 * import { compterElements } from "./App/reduce.js";

const divers = [
  "veste",
  "clé",
  "verre",
  "chien",
  "biberon",
  "chien",
  "veste",
  "clé",
  "chien",
];

console.log("divers:", compterElements(divers));

 */
