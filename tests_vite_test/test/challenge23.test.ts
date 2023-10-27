/*
Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.

Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar 
las máquinas y optimizar al máximo la creación de regalos. 🎁

La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y,
para ello, podemos cambiar cada carácter por otro.

Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden,
no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar
a fabricar otro según las reglas mencionadas. Lo mejor es que veamos un ejemplo:

const from = 'BAL'
const to   = 'LIB'
const canReconfigure(from, to) // true
la transformación sería así:
B -> L
A -> I
L -> B


const from = 'CON'
const to   = 'JUU'
const canReconfigure(from, to) // false
 no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO

const from = 'XBOX'
const to   = 'XXBO'
const canReconfigure(from, to) // false

no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)


const from = 'XBOX'
const to   = 'XOBX'
const canReconfigure(from, to) // true

const from = 'MMM'
const to   = 'MID'
cons canReconfigure(from, to) // false

no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)


const from = 'AA'
const to   = 'MID'
cons canReconfigure(from, to) // false -> no tiene la misma longitud
*/

import { describe, expect, it } from "vitest";

function canReconfigure(from: string, to: string) {
  if (typeof from !== "string")
    throw new Error("first parameter is not a number");
  if (typeof to !== "string")
    throw new Error("second parameter is not a number");

  const isSameLength = from.length === to.length;
  if (!isSameLength) return false;

  const hasSameNumberUniqueLetters = new Set(from).size === new Set(to).size;
  if (!hasSameNumberUniqueLetters) return false;

  const tranformation = {};

  for (let index = 0; index < from.length; index++) {
    const fromLetter = from[index];
    const toLatter = to[index];

    const storedLetter = tranformation[fromLetter];

    if (storedLetter && storedLetter !== toLatter) return false;

    tranformation[fromLetter] = toLatter;
  }
  return true;
}

describe("challenge23", () => {
  it("should throw if first paramter is not a string", (): void => {
    expect(() => canReconfigure(2)).toThrow();
  });
  it("should throw if second paramter is not a string", (): void => {
    expect(() => canReconfigure("a")).toThrow();
  });
  it("should return a boolean", (): void => {
    expect(canReconfigure("SOME", "THIS")).toBeTypeOf("boolean");
  });
  it("should return false if the paramters provided have different length", (): void => {
    expect(canReconfigure("SOME", "THE")).toBe(false);
  });
  it("should return true if the paramters provided have same length", (): void => {
    expect(canReconfigure("SOME", "THER")).toBe(true);
  });
  it("should return false if the parmaters do not have the same number of unique letters", (): void => {
    expect(canReconfigure("SOMME", "THISE")).toBe(false);
  });
  it("should return false if the parmaters do not have the same number of unique letters", (): void => {
    expect(canReconfigure("SOMME", "THISE")).toBe(false);
  });
  it("should return false if the paramters have different assigned transformation", (): void => {
    expect(canReconfigure("XBOX", "XXBO")).toBe(false);
  });
});
