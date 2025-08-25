/**
 *creer une fct trierTableaux() recevant en argument un tableau d'objet et le retournant trié selon deux clés
 - le tableau doit être trié d'abord par prix puis par quantité
 - cela signifie que si deux obj ont la meme valeur pour la prop prix ils sont ensuit trié par quantité

 OBJECTIF : 
 . creer une fonction trierTableaux() recevant un tableau d'objets en arguments
 . la fonction doit retourner le tableau trié par prix de maniere decroissante
 . la fonction doit trier les objets par quantité de maniere decroissant'e si plusieurs objets on le meme prix
 */

export function trierTableaux(tableauTrie) {
  return tableauTrie.sort((item1, item2) => {
    if (item1.prix !== item2.prix) {
      return item2.prix - item1.prix;
    }
    return item2.quantite - item1.quantite;
  });
}

/**
 * index.js
 * 
const produits = [
  { prix: 20, quantite: 10 },
  { prix: 20, quantite: 2 },
  { prix: 50, quantite: 1 },
];

console.log(trierTableaux(produits));

 */
