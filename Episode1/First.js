console.log("Apna College");
console.log("Anamika");
console.log("I love JS");

//part1
fullName = "Reena Lobo";
age = 48;
price = 87.17;
radius=7;
x = null;
y = undefined;
isFollow = true;
console.log(isFollow);

//part2 (dynamically typed lang)
fullName = "Anamika Tiwari";
console.log(fullName);
fullname = "Shikha";
console.log(fullname);

//using _
_fullName = "Hello";
console.log(_fullName);
//using $
$fullname = "Bye";
console.log($fullname);

//part3 Variables let,var, const
let Name = "Anamika";
let age1 = 20;
console.log(Name);
console.log(age1);
const Pi = 3.14;
console.log(Pi);

//BLOCK
{
    let a = 15;
    console.log(a);
}
{
    let a = 20;
    console.log(a);
}

//Part4 DataTypes
let i = BigInt(20);
console.log(i);
let z = Symbol("124");
console.log(z);

const student = {
    name: "Riya",
    age: 18,
    cgpa: 7,
    isPass: true
}

console.log(student["cgpa"]);