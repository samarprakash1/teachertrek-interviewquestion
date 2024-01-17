// Q. Differences between == and ===.
//== => loose equality checking
//=== => strict equality checking
let a = 5;
let b = '5';

console.log(a == b); 
console.log(a === b);  

let x = null;
let y = undefined;

console.log(x == y);  
console.log(x === y);   
