const email = "Darpanneve3@gmail.com";

if (email) {
  console.log("Email is present");
} else {
  console.log("Email is not present");
}

//false values: false,0,"",null,undefined,-0,NaN,Bigint(0n)
//true values: true,any number,any string,{},[],function(){},
// Bigint(1n),-1,1,1.1,"0","false","null","undefined","-0","NaN","Bigint(0n)"," "

//nullish Coalescing operator (??): null,undefined

let val1;
val1 = null ?? 10;
console.log(val1);

// Terniary operator

// condition ? if true : if false;
const price = 20;
price > 10
  ? console.log("price is greater than 10")
  : console.log("price is less than 10");
