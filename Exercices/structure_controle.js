export function substract(a, b) {
  return a - b;
}

console.log("total: ", substract(5, 2));

export let nombre = 42;

export let a = 1;
export let b = "test";
export let c = [1, 2, 3];

export let a1 = true;
export let b1 = 12;
export let c1 = 10n ** 11n;
export let d1 = "Je m'appelle chouquette";

// let mots = phrase.split(" ");
// export let c = mots[0] + " " + mots[1];
// export let d = " " + mots[2];
// export let e = " " + mots[3] + " " + mots[4] + " !";

//deuxieme methode
// export let c = phrase.substring(0, 15);
// export let d = phrase.substring(15, 26);
// export let e = phrase.substring(26);

// export let phrase = "Essaye de concatener plusieurs chaines !";

// export let decoupe = phrase.split(" ");

// export let c = decoupe.slice(0, 2).join(" ");
// export let d = decoupe.slice(2, 4).join(" ");
// export let e = decoupe.slice(4).join(" ");

// export let concatenation = `${c} ${d} ${e}`;

// export let a = 42;
// export let b = 22;
// export let result = a - b;

// export let phrase = "Essaye de concaténer plusieurs chaînes !";
// let mots = phrase.split(" ");
// export let c = mots[0] + " " + mots[1];
// export let d = " " + mots[2];
// export let e = " " + mots[3] + " " + mots[4] + " !";

// export let concatenation = c + d + e;
// console.log(concatenation);
//6 valeurs renvoyant un boolee
export let falsy1 = false;
export let falsy2 = "";
export let falsy3 = undefined;
export let falsy4 = NaN;
export let falsy5 = null;
export let falsy6 = 0;

console.log(falsy1);
console.log(falsy2);
console.log(falsy3);
console.log(falsy4);
console.log(falsy5);
console.log(falsy6);

//operateur conditionnel
export function testFn(condition, age) {
  // Déclarez en dessous :
  const a = 42;
  let b = condition ? a : 0;
  let statut;
  switch (true) {
    case age >= 21:
      statut = "Majeur aux USA";
      break;
    case age >= 18:
      statut = "Majeur en France";
      break;
    default:
      statut = "Mineur";
  }
  // Ne touchez pas au return.
  return [b, statut];
}

console.log(testFn(true, 22));
console.log(testFn(false, 18));
console.log(testFn(1, 12));
console.log(testFn(0, 19));

//switch case
export function testFn(note) {
  // Déclarez en dessous :

  let remarque;
  switch (note) {
    case 5:
      remarque = "Excellent";
      break;
    case 4:
      remarque = "Très bien";
      break;
    case 3:
      remarque = "Bien";
      break;
    case 2:
      remarque = "Moyen";
      break;
    case 1:
    case 0:
      remarque = "Médiocre";
      break;
    default:
      remarque = "La note doit être un nombre compris entre 0 et 5";
      break;
  }

  // Ne touchez pas au return.
  return remarque;
}
console.log(testFn(4));
console.log(testFn(2));
console.log(testFn(-99));
console.log(testFn(200));
console.log(testFn(undefined));

//situation de controle
//1er solution
export function testFn(nombre) {
  // Déclarez en dessous :
  let texte = "";

  if (typeof nombre !== "number" || isNaN(nombre)) {
    texte = "Pas un nombre";
  } else {
    for (let i = 0; i < 5; i++) {
      if (i === 1) continue;
      texte += nombre + i;
    }
  }
  return texte;
}

console.log(testFn(50));
console.log(testFn(-5));
console.log(testFn(undefined));
console.log(testFn("Dupont"));

//2eme solution
export function testFn(nombre) {
  // Déclarez en dessous :
  let texte = "";

  if (typeof nombre !== "number") {
    texte = "Pas un nombre";
  } else {
    for (let i = nombre; i < nombre + 5; i++) {
      if (i === nombre + 2) continue;
      texte += i;
    }
  }
  return texte;
}

console.log(testFn(50));
console.log(testFn(-5));
console.log(testFn(undefined));
console.log(testFn("Dupont"));
