let letters = ["a", "b", "c", "d", "e"];

console.log(letters);
//get all letters in own line
for (let l of letters) {
console.log(l);
}

//slice and concatenate - first two letters plus last two
let l1 = letters.slice(0,2);
console.log(l1);
let l2 = letters.slice(3);
console.log(l2);
//conca l1 and l2 into a new array
let l3 = l1.concat(l2);
console.log(l3);
console.log(l1);

let nmbrs = [1,5,3,7,9,13];
let sum = 0;
//indexed for loop
for (let i = 0; i < nmbrs.length; i ++) {
    sum +=nmbrs[i];
}
console.log("sum = " +sum);