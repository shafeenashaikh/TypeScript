let s = Symbol("First Symbole");
console.log(typeof s);
console.log(s.toString());

let s2 = Symbol("Test");
let s3 = Symbol("Test");

console.log(s2===s3);

let s4 = Symbol.for("RegSymbole");
let s5 = Symbol.for("RegSymbole");

console.log(s4===s5);
console.log(Symbol.keyFor(s4));