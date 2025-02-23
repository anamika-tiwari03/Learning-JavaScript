const URL = "https://catfact.ninja/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response.status);//JSON format
    let data = await response.json();
    factPara.innerText = data.data[0].fact;
};


//Chaining
// function getFacts() {
//     fetch(URL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(response.status);//JSON format
//             let data = response.json();
//             factPara.innerText = data.data[0].fact;
//         })
// }


btn.addEventListener("click", getFacts);


