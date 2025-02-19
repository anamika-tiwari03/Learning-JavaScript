//Episode-5 FUNCTIONS AND METHODS

/*
console.log("Hii");
"abcde".toUpperCase();
[1,2,3,4].push(5);

*/
function myFunction(){   //function defn
    console.log("Welcome");
    console.log("I am learning JS");
}

myFunction();  //function call

//function to sum 2 numbers
function sum(a,b){
    console.log(a+b);
}

sum(2,3);
sum(4,5);

//function with return type
function difference(x,y){
    z=x-y;
    return z;
}
let diff=difference(9,8);
console.log(diff);

//.......................Arrow functions..........
const arrowSum=(a,b)=>{
    console.log(a+b);
};

arrowSum(20.30);

//forEach Loop  

/*Callback function........
arr.forEach((val) =>{
    console.log(val);
    })
*/

function abc() {
    console.log("hello");
}

function myFunc(abc) {
    return abc;
}

//use of forEach
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
    console.log(val);
});

//use of arrow functions

let arr1 = [1, 2, 3, 4, 5];
arr1.forEach((val) => {
    console.log(val);
})

let arr2 = ["pune", "delhi", "mumbai"];
arr2.forEach((val, idx, arr2) => {
    console.log(val, idx, arr2);
})

let nums2 = [67, 52, 39];

let newArr = nums2.map((val) => {
    return val * 2;
});

console.log(newArr);

let calSquare1 = (num) => {
    console.log(num * num);
};

//....filter method.....
let array = [1, 2, 3, 4, 5, 6, 7];
let evenArr = array.filter((val) => {
    return val % 2 == 0;
});
console.log(evenArr);

//......reduce method......
let array1 = [1, 2, 3, 4];
const output = array1.reduce((res, curr) => {
    return res + curr;
})
console.log(output);
 

let array2 = [1, 6, 3, 4];
const output1 = array2.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
})
console.log(output1);