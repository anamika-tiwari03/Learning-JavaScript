// let str = "Anamika";
// console.log(str[3]);

// //Template Literals and String interpolation

// let SpecialString = `This is a template literal`;
// console.log(typeof SpecialString);

// let obj = {
//     item: "pen",
//     price: 10,
// };
// let output = `The cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("the cost of", obj.item, "is", obj.price, "rupees");
//escape Characters
// console.log("Anamika");

// let str = "Anamika\tTiwari";
// console.log(str.length);

//String Methods in Javascript

//str.toUpperCase()

let str = "Anamika";
console.log(str.toUpperCase());

//str.toLowerCase()
console.log(str.toLowerCase());

//str.trim()

let str1 = "                 Apna College ";
console.log(str1.trim());

//.....slice,concat,replace,charAt

let str2 = "0123456";
console.log(str2.slice(4));

let str3 = "Anamika";
let str4 = "KTiwari";
let res = str3.concat(str4);
let jam = "hello" + res;
console.log(jam);


let s = "hello";
console.log(s.replace('l', 'm'));
console.log(s.replaceAll('l', 'm'));

let s1 = "IloveJS";
console.log(s1.charAt(0));
