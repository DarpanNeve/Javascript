//primitive and non primitive
//primitive 

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
console.table([a, b, c, d, e, f, g]);
console.log(typeof (d));
console.log(typeof (g));    //undefined
console.log(typeof (a));    //object

//non primitive (Reference)
// Array,object,function
const heros=['new','old'];
let obj={
    name:'darpan',
    number:9175
}
const myFunction=function(){
    console.log("Hello world");
}

//=====================================================================================

// Memory
// Stack (Primitive), Heap (Non-Primitive)
// stack gives the copy
// Heap gives the reference

let myName='darpan'
let myAnotherName=myName
myAnotherName='Neve'

console.log(myAnotherName)
console.log(myName)
let obj1={
    name:'darpan',
    number:9175
}
let obj2=obj1;
obj2.name='Neve'
console.log(obj1);
console.log(obj2);

