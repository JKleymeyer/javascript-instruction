let readline = require('readline-sync');

console.log("Readline demo app");
console.log("Get some input from the console...");

let str = readline.question('Enter a String: ');
console.log("You entered: " +str)
let n1 = readline.questionInt('Enter a whole number: ');
console.log("Your number squared = " +n1*n1);
let d1 = readline.questionFloat('Enter a decimal #: ');
console.log("dec / nbr = " +d1/n1);