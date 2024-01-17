//Q.  What is type coercion ?
// Type coercion is the process of
// converting value from one type to
// another.
//(such as string to number,
//string to object etc)

// Implicit Type Coercion:
let stringNumberImplecit = "5";
let actualNumberImplicit = 10;
let result = stringNumberImplecit
 + actualNumberImplicit;
console.log(result);

let a = 2,
  b = "2";
console.log(2 == "2");


// Explicit Type Coercion/type Casting:
let stringNumber = "5";
let actualNumber = parseInt(stringNumber);
console.log(actualNumber);
