//question-1  For a given array with marks of students ->[85,97,44,37,76,60] ,find the average marks of the entire class.

/*let marks = [85,97,44,37,76,60];
 let sum = 0;

 for (let mark of marks) {
     sum += mark;
 }
 let avg = sum / marks.length;
 console.log("Average mark od class is =", avg);
*/


/*qustion-2 For a given array with pieces of 5 items -> [250,645,300,900,50] ,all items have an offer of 10% OFF on them, Change the array
 to store final price after applying offer.*/

/* let items = [250, 645, 300, 900, 50]
 let idx = 0;
 for (let val of items) {
     console.log(`value at index ${idx} = ${val}`);
     let offer = val / 10;
     items[idx] = items[idx] - offer;
     console.log(`value after offer = ${items[idx]}`);
     idx++;
 }

 for (let i = 0; i < items.length; i++) {
     let offer = items[i] / 10;
     items[i] -= offer;
 }
 console.log(items);
*/

//Array METHODS
let companies = ["Blooomberg", "Microsoft", "Uber", "Google", "IBM"];
companies.shift();
companies.splice(2, 1, "Apple");
companies.push("HCL");