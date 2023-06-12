export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barInCompatible: number = 1;

// fooIncompatible = barInCompatible;

let fooString: string;
let batString: string = 'string';

fooString = batString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;

fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Personn {
  constructor(public age: number, public name: string) {}
}

let me: Animal;

me = new Personn(43, 'HamSan');
