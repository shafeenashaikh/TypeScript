var s = Symbol("First Symbole");
console.log(typeof s);
console.log(s.toString());
var s2 = Symbol("Test");
var s3 = Symbol("Test");
console.log(s2 === s3);
var s4 = Symbol["for"]("RegSymbole");
var s5 = Symbol["for"]("RegSymbole");
console.log(s4 === s5);
console.log(Symbol.keyFor(s4));
