//Evenets in JS

let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("Button was clicked");
    let a = 25;
    a++;
    console.log(a);//26
};


let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("You are inside div");
};

//Event Objects
btn1.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
};

//Event Listeners
btn1.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.type);
    console.log("Button was clicked! handler1");
});

btn1.addEventListener("click", () => {
    // console.log(e);
    // console.log(e.type);
    console.log("Button was clicked! handler2");
});

btn1.addEventListener("click", () => {
    // console.log(e);
    // console.log(e.type);
    console.log("Button was clicked! handler3");
});

const handler3 = () => {
    // console.log(e);
    // console.log(e.type);
    console.log("Button was clicked! handler4");
};
btn1.removeEventListener("click", handler3);