//window
 console.log(window);
 window.console.log("hello");

//DOM
console.dir(document.body);
console.dir(document.body.childNodes[1]);

//DOM Manipulation
document.getElementById("myId")
let heading = document.getElementById("heading");
console.dir(heading);

document.getElementByClassName

let headings = document.getElementsByClassName("head");
console.dir(headings);

document.getElementsByTagName

let parahs = document.getElementsByTagName("p");
console.dir(parahs);

//Query Selector

let firstEl = document.querySelector(".head"); // 1st element
console.dir(firstEl);
let allElement = document.querySelectorAll(".head");// NodeList
console.dir(allElement);

//Properties 
//tagName,innerText,innerHTML,textContent

let divs = document.querySelectorAll("box");
console.dir(divs);