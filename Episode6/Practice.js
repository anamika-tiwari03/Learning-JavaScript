//create h2 heading element text -"Hello Javascript", Appennd "From apna college students" to this text using js
 /*let h2 = document.querySelector("h2");
 console.dir(h2.innerText);

 h2.innerText = h2.innerText + "from Apna college students";
*/

// Create 3 divs with common class name - "box". Access them and add some unique text to each of them 
let divs = document.querySelectorAll(".box");
console.dir(divs[0]);
let idx = 1;
for (div of divs) {
    // console.log(div.innerText);
    div.innerText = `new unique value ${idx}`
    idx++;
}
divs[0].innerText = "new uniue value 1";
divs[1].innerText = "new uniue value 2";
divs[2].innerText = "new uniue value 3";