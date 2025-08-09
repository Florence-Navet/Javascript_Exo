export let a = 42;
export let b = 22;
export let result = a - b;

export let phrase = "Essaye de concaténer plusieurs chaînes !";
let mots = phrase.split(" ");
export let c = mots[0] + " " + mots[1];
export let d = " " + mots[2];
export let e = " " + mots[3] + " " + mots[4] + " !";

export let concatenation = c + d + e;
console.log(concatenation);
