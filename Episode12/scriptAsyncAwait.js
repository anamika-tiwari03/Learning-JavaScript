async function hello() {
    console.log("hello");
}

async function getWeatherdata() {
    await api();
    await api();
}

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data");
            resolve(200);
        }, 2000)
    });
}
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

//Async-await 

// async function getAllData() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }

//IIFE : Immediately invoked function expression
(async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
})();