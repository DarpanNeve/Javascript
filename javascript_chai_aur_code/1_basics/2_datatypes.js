// N -Null  - Standalone value
// N -Number
// S -Symbol
// S -String
// B -Boolean
// B -Bigint
// U -Undefined
let a = null;
let b = 46;
let c = true;
let d = BigInt("567");
let e = "harry";
let f = Symbol("I am the greatest person of the world");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof (d));
console.log(typeof (g));    //undefined
console.log(typeof (a));    //object


//object in js
const item = {
    "Hello": true
}
