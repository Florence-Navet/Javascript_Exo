/**
 * Declarer variable aleatoire et lui assigner nb aleatoire
 * nb en 0 et 10
 * declarer une variable variable avec Math.random() et
 * Math.floor() et generer un nombre 0 et 10
 * Attention 10 doit être inclus
 */

export function testFn() {
  let aleatoire = Math.floor(Math.random() * 11);
  console.log(aleatoire);
  return aleatoire;
}

testFn();
