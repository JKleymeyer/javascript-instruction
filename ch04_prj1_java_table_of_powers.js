let readline = require('readline-sync');

console.log("Welcome to the table of powers");

let interger = readline.questionInt("Enter an integer: ");

console.log("Number  Square  Cube");
console.log("======  ======  ======");

for (let i = 1; i <= interger; i++) {
    let square = i * i;
    let cube = i * i * i;

    console.log(i+"       "+square+"        "+cube);
}