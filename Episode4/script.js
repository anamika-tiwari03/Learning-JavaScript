let marks = [97, 84, 74, 79, 28];
console.log(marks);
console.log(marks.length);

let heros = ["ironman", "spiderman", "batman", "Antan", "thor"]
console.log(heros);

//Looping over array
for (let index = 0; index < heros; index++) {
    console.log(heros[index]);
}

for (let hero of heros) {
    console.log(hero);
}

for (let hero of heros) {
    console.log(hero.toUpperCase());
}

//Push(),Pop(),toString()
let foodItems = ["potato", "apple", "mango", "grapes"];
foodItems.push("chips", "burger", "paneer");
console.log(foodItems);
let deletedItem = foodItems.pop();
console.log("Deleted item is", deletedItem);
console.log(foodItems.toString());

let marks1 = [85, 97, 44, 37, 76, 60];
console.log(marks1.toString());

let marvel_heros = ["Thor", "SpiderMan", "Ironman"];
let dcHeroes = ["Superman", "batman"];
let hero = marvel_heros.concat(dcHeroes);
console.log(hero);

//unshift and shift method
marvel_heros.unshift("Antman");
let val = marvel_heros.shift();
console.log("Deleted item is", val);

//Slice
let marvel = ["Thor", "SpiderMan", "Ironman", "Batman"];
console.log(marvel);
console.log(marvel.slice(1));

//splice
let arr = [1, 2, 3, 4, 5, 6, 7];
/*arr.splice(2,2,101,102);
 arr.splice(2,0,101);*/

//Delete
arr.splice(3, 1);
//Replace
arr.splice(3, 1, 101);

