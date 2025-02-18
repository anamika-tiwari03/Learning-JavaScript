//Comments in Javascript 

console.log("Hellooo");

//Operators in JS
//Arithmetic operators +,-,*,/
// Modulus, Exponential,Increment and Decrement

//Arithmetic operator
// let a = 5;
// let b = 2;
// console.log("a = ", a, "b = ", b);
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);

//Unary operator
// let a = 5;
// let b = 2;
// console.log("a = ", a, "b = ", b);

// // a = a + 1
// // console.log("++a =", ++a);

// console.log("a++ =", a++);
// console.log("a = ", a);
//similarly decrement

//Assignment operators 
// = , +=, *=,%=,**=

// let a = 5;
// let b = 2;
// console.log("a = ", a, "b = ", b);
// a += 4;
// console.log(a);
//similary other operators

//Comparision Operators
//Equal to ==, Equal and type ===, !=, !==

// let a = 5;//number
// let b = "5";// string -> number
// console.log("a = ", a, "b = ", b);

// console.log("a===b", a === b);// true
//similarly for  >,< 

//Logical Operators

//Logical AND, OR, NOT
let a = 2;
let b = 4;

let cond1 = a > b;
let cond2 = a === 5;
console.log('cond1 && cond2=', cond1 && cond2);

console.log('cond1 || cond2=', cond1 || cond2);

console.log("!(6<5) = ", !(a < b));


//Condiational Statements

//if Statement

// let age = 25;
// if (age > 18) {
//     console.log("You can Vote");
// }

// let mode = "white";
// let color;

// if (mode == "dark") {
//     color = "black";
// }
// if (mode == "light") {
//     color = "white";
// }
// console.log(color);

// // if-else statement
// if (mode == "dark") {
//     color = "black";
// }
// else {
//     color = "white";
// }
// console.log(color);

//odd or even

let num = 2;
if (num % 2 === 0) {
    console.log(num, "is even");
}
else {
    console.log(num, "is odd");
}

//else-if statement

let mode = "silver";
let color;

if (mode == "dark") {
    color = "black";
}
else if (mode == "blue") {
    color = "blue";
}
else if (mode == "pink") {
    color = "pink";
}
else {
    color = "white"
}

console.log(color);

//Ternary Operators 

let age = 25;

let result = age >= 18 ? "adult" : "not adult";
console.log(result);


//MDN Docs
// alert("hello");
// prompt("Hello");

let name = prompt("hello!");
console.log(name);