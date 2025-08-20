export function testFn(fichier) {
  // Déclarez en dessous :
  const coupage = fichier.split(/\.(?=[^\.]+$)/);
  let reponse = coupage.length > 1 ? coupage[1] : "";

  // Ne touchez pas au return :
  return reponse;
}
