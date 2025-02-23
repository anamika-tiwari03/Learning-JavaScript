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



