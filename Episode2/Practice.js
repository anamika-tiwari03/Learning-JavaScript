//question-1 Multiple of 5 or not?

/* let num = prompt("Enter a number");
// if (num % 5 === 0) {
//     console.log(num, "is a multiple of 5");
// }
// else {
//     console.log(num, " is NOT a multiple of 5");} */


//question-2 Display Student grade
let score = prompt("Enter the score");
if (score >= 90 && score <= 100) {
    grade = 'A';
}
else if (score >= 70 && score <= 89) {
    grade = 'B';
}
else if (score >= 60 && score <= 69) {
    grade = 'C';
}
else if (score >= 50 && score <= 59) {
    grade = 'D';
}
else {
    grade = 'F';
}

console.log("Your Grade will be", grade);