export function testFn(nombre) {
  if (typeof nombre !== "number" || isNaN(nombre)) {
    nombre = "Pas un nombre";
    console.log(nombre);
  } else if (!Number.isInteger(nombre)) {
    nombre = Math.round(nombre * 1000) / 1000;
    console.log(nombre);
  }
  return nombre;
}

// testFn(5.55);

testFn(5);
testFn(5.555);
testFn(3.333333333333);
testFn(9.9999999999);
testFn(undefined);
testFn(null);
testFn("Bob");
