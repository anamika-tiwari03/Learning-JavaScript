// console.log("Apna College");
// // Loops concept
// //for loops

// for (let count = 1; count <= 5; count++) {
//     console.log("Apna College");
// }
// console.log("Loop has Ended");

//Calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum = sum + i;
// }
// console.log("sum = ", sum);
// console.log("Loop has ended");
// for (let i = 1; i <= 5; i++) {
//     console.log("i = ", i);
// }

//infinite loops : A Loop that never ends

//while loops
// let i = 1;
// while (i <= 5) {
//     console.log("Apna College");
//     i++;
// }

// do while loop
let i = 20;
do {
    console.log("Apna College");
    i++;
} while (i <= 10);

//for of loop mainly for strings

let str = "apnaCollege";
let size = 0;
for (let i of str) {
    console.log("i=", i);
    size++;
}
console.log("size =", size);

//for im loop
let student = {
    name: "Anamika",
    age: 20,
    cgpa: 9.0,
    isPass: true
};

for (let key in student) {
    console.log("key= ", key, "value = ", student[key]);
}
