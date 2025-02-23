//Synchronous: each instruction waits for the other instruction and executes in a sequence
// console.log("one");
// console.log("two");
// console.log("three");

//Asynchronous : Some lines will take more time for the execution that timw delay 
// to overcome this asynchronous code execution will be used

// console.log("one");
// console.log("two");
// setTimeout(() => {
//     console.log("hello");
// }, 2000);//timeout 2s= 2000ms
// console.log("three");
// console.log("four");

//callback

// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallBack) {
//     sumCallBack(a, b);
// }

// calculator(1, 2, sum);

//callBack for setTimeout

// const hello = () => {
//     console.log("hello");
// }
// setTimeout(hello, 3000);

//Callback Hell
/*
Callback hell: nested callbacks stacked below one another forming a pyramid structure(pyramid doom)
This style of programming becomes difficult to understand and manage.
*/
// let age = 19;
// if (age >= 18) {
//     if (age >= 68) {
//         console.log("Senior");
//     } else {
//         console.log("middle");
//     }
// } else {
//     console.log("child");
// }


//callback hell example

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data ", dataId);
            // if (getNextData) {
            //     getNextData();
            // }
            resolve("success");
        }, 2000);
    });
}

// let p1 = getData(1);
// p1.then((res) => {
//     console.log(res);
//     getData(2).then(() => {
//         console.log(res);
//     })
// })

//other method - promise chaining

getData(1).then((res) => {
    return getData(2);
})
    .then((res) => {
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });

//callback hell
// getData(1, () => {
//     console.log("getting data2 ....");
//     getData(2, () => {
//         console.log("getting data3 ....");
//         getData(3, () => {
//             console.log("getting data4 ....");
//             getData(4)
//         });
//     });
// });

//Promises- eventual completion of task. it is an object in Js
//It is a solution to callback hell
//let promise = new Promise(resolve,reject)

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a Promise");
//     // resolve(123);
//     reject("some error");
// });
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data ", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");
//         // reject("network error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise fullfilled", res);
// });

// promise.catch((err) => {
//     console.log("Rejected", err);
// });

//Promise chain....

// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data1");
//             resolve("success");
//         }, 2000);
//     })
// }
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data1");
//             resolve("success");
//         }, 2000);
//     });
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data2");
//             resolve("success");
//         }, 2000);
//     });
// }
// console.log("Fetching data1....");
// asyncFunc1().then((res) => {
//     // console.log(res);
//     console.log("Fetching data2...");
//     asyncFunc2().then((res) => {
//         // console.log(res);
//     });
// });



