console.log("Hello world");
//var is globally scoped nad can be redeclared
//var can be updated
var a = 45;
var darpan;

let b = "Harry";
var c = null;
var d = undefined;
//let and const are block scoped and cant be redeclared
//let can be declared 
// const can't be modified and decalred again
//const can't be initialised
{
    var a = 37
    let b = 'this'
    console.log(b);
    console.log(a);
}
console.log(b);
console.log(a);
