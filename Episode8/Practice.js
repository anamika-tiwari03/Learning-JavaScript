let modBtn = document.querySelector("#mode");
let currMode = "Light";
let body = document.querySelector("body");
modBtn.addEventListener("click", () => {

// console.log("You are trying to change the mode");

    if (currMode == "Light") {
        currMode = "dark";
        body.classList.add("dark");
    } else {
        currMode = "Light";
        body.classList.add("light");
    }
    console.log(currMode);
});